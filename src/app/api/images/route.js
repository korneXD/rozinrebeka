import { supabase } from "@/lib/supabase";

export const revalidate = 3600;

export async function GET() {
  const { data, error } = await supabase.storage.from("munkaim").list();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  const images = data.map((file) => ({
    name: file.name,
    url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/munkaim/${file.name}`,
  }));

  return new Response(JSON.stringify(images), { status: 200 });
}
