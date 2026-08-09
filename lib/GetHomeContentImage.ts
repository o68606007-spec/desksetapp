import { supabase } from "../utils/supabase";

export function getHomeContentImage() {
    const HomeImageData = supabase.storage.from("images").getPublicUrl("desksetappimage/Homeimage/desksetapp_home_image.png");
    return HomeImageData.data.publicUrl;
}