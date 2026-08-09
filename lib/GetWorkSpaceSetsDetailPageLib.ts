import { supabase } from "../utils/supabase";

export async function getWorkSpaceSetsDetailPage(id: string) {
    const data = await supabase.from("workspace_sets").select("*").eq("id", id);
    if (data.error) {
        console.log("error", data.error);
    }
 
    return data.data.map((item) => ({
        id: item.id,
        title: item.title,
        budget: item.budget,
        space: item.space,
        color: item.color,
        use_case: item.use_case,
    }));
}