import { SearchDetailTitle } from "../../components/SearchDetailTitle";
import { ComeBackSearchButton } from "../../components/ComeBackSearchButton";
import { ItemDetail } from "../../components/ItemDetail";

import { FormData } from "../../../domain/params";

export default async function SearchDetailPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<FormData> }) {

    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;

    const query = new URLSearchParams({
        budget: resolvedSearchParams.budget ?? "",
        space: resolvedSearchParams.space ?? "",
        color: resolvedSearchParams.color ?? "",
    }).toString();

    return (
        <>
            <SearchDetailTitle />
            <ItemDetail  id={resolvedParams.id} />
            <ComeBackSearchButton query={query} />
        </>
    )
}