import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient'; // Ajuste o caminho

export function useProjectDetail(slug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchProjectDetail() {
      try {
        setLoading(true);
        // Busca um único projeto pelo slug e todas as suas mídias relacionadas
        const { data, error } = await supabase
          .from('projetos')
          .select(`
            *,
            midias:media (*)
          `)
          .eq('slug', slug)
          .single(); // .single() garante que o resultado seja um único objeto

        if (error) throw error;

        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjectDetail();
  }, [slug]);

  return { project, loading, error };
}