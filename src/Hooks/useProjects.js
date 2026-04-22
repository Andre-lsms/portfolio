import { useEffect, useState } from "react";

// Hook para Listar
export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const response = await fetch("/api/get-projects");
        const data = await response.json();

        if (!response.ok)
          throw new Error(data.error || "Erro ao buscar projetos");
        setProjects(data);
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

// Hook para Detalhe
export function useProjectBySlug(slug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    async function fetchProject() {
      try {
        setLoading(true);
        const response = await fetch(`/api/get-project-by-slug?slug=${slug}`);
        const data = await response.json();

        if (!response.ok)
          throw new Error(data.error || "Projeto não encontrado");
        setProject(data);
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
