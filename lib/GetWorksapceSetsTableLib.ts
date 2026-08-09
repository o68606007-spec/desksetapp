import {supabase} from "../utils/supabase";

import { Props } from "../domain/params";

export async function getWorkspaceSets(params: Props) {
    const param = await params.searchParams;

    let query = supabase.from("workspace_sets").select("*");

    if (param.budget) {
        query = query.lte("budget", Number(param.budget));
    }
    if (param.space) {
        query = query.lte("space", Number(param.space));
    }
    if (param.color) {
        query = query.eq("color", param.color);
    }

    const data = await query;
    if (data.error) {
        console.log("error", data.error);
    }
    return data;
}