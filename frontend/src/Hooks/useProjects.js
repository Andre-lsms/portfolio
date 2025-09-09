import { useState, useEffect } from "react";

import { supabase } from "../lib/supabaseClient";

export function useProjects() {
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);

        const { data, error } = await supabase.from("projects").select(`

id,

title,

description,

thumb:thumb!id_project (

id,

media:media!id_media (

url

)

),

media (

id,

type,

url

)

`);

        if (error) throw error;

        console.log("DATA:", data);

        const formattedProjects = data.map((project) => ({
          ...project,

          thumb_url: project.thumb?.media?.url || null,

          medias: project.media || [],
        }));

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
