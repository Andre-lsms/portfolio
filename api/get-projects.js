import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
  );

  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        id,
        title,
        slug,
        cover:products_id_cover_fkey (
          id,
          url,
          type
        )
      `,
      )
      .eq("id_enterprise", 2)
      .eq("active", true);

    if (error) throw error;

    return res.status(200).json(data || []);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
