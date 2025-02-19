import { supabase } from "@/lib/supabase";

export const revalidate = 86400;

export const config = {
  runtime: "edge",
};

export async function GET() {
  const { data, error } = await supabase.storage.from("munkaim").list();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const images = data.map((file) => ({
    name: file.name,
  }));

  return new Response(JSON.stringify(images), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
