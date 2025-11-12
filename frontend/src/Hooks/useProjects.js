import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

function slugify(id, text) {
  return (id + " " + text)
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);

        // Agora puxa APENAS a tabela projects + suas mídias ordenadas
        const { data, error } = await supabase.from("projects").select(`
            id,
            title,
            description,
            media (
              id,
              type,
              url,
              number_sort
            )
          `);

        if (error) throw error;

        // Ordenar as mídias pelo number_sort no frontend,
        // caso o Supabase não garanta essa ordenação automaticamente.
        const formattedProjects = data.map((project) => {
          const sortedMedias = (project.media || []).sort(
            (a, b) => (a.number_sort || 0) - (b.number_sort || 0)
          );

          return {
            ...project,
            slug: slugify(project.id, project.title),
            medias: sortedMedias, // mídias já ordenadas
            first_media: sortedMedias[0] || null,
            first_media_url: sortedMedias[0]?.url || null,
          };
        });

        setProjects(formattedProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
