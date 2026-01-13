import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("projects")
          .select(
            `
            id,
            title,
            slug,
            cover:projects_id_cover_fkey

 (
              id,
              url,
              type
            )
          `
          )
          .eq("id_enterprise", 2);

        if (error) throw error;

        setProjects(data || []);
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

/* ===============================
   DETALHE DO PROJETO (PAGE)
   title | description | midias
================================ */
export function useProjectBySlug(slug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchProject() {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("projects")
          .select(
            `
            id,
            title,
            description,
            media:midia_project_id_fkey

 (
              id,
              url,
              type
            )
          `
          )
          .eq("slug", slug, "id_enterprise", 2)
          // .eq("id_enterprise", 1)
          .single();

        if (error) throw error;

        setProject({
          ...data,
          midias: data.media || [],
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [slug]);

  return { project, loading, error };
}
