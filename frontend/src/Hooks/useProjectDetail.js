import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient"; // Ajuste o caminho

export function useProjectDetail(id_project) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id_project) return;

    async function fetchProjectDetail() {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("projects") // 👈 faltava a tabela
          .select(`
            id,
            title,
            description,
            media (
              id,
              type,
              url
            )
          `)
          .eq("id", id_project)
          .single();

        if (error) throw error;

        // Normaliza para "midias", compatível com seu componente
        setProject({
          ...data,
          midias: data.media || []
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjectDetail();
  }, [id_project]);

  return { project, loading, error };
}
