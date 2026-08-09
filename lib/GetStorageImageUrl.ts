import { supabase } from "../utils/supabase";

export function getStorageImageUrl(path: string): string {
    const data  = supabase.storage.from("images").getPublicUrl(path);
    return data.data.publicUrl;
}