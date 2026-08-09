import { supabase } from "../utils/supabase";

export async function getWorkSpaceItems(id: string) {
    const data = await supabase.from("workspace_items").select("*").eq("workspace_set_id", id);
    if (data.error) {
        console.log("error", data.error);
    }
 
    return data.data.map((item) => ({
        id: item.id,
        category: item.category,
        item_name: item.item_name,
        image_url: item.image_url,
        url: item.url,
    }));
}