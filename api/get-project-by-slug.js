import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const { slug } = req.query; // Pega o slug da URL: /api/get-project-by-slug?slug=valor

  if (!slug) return res.status(400).json({ error: "Slug is required" });

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
  );

  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        id,
        title,
        description,
        media:midia_project_id_fkey (
          id,
          url,
          type
        )
      `,
      )
      .eq("slug", slug)
      .eq("id_enterprise", 2)
      .single();

    if (error) throw error;

    return res.status(200).json({
      ...data,
      midias: data.media || [],
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
