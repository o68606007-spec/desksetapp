import { getWorkspaceSets } from "../../lib/GetWorksapceSetsTableLib";
import { Props } from "../../domain/params";

import { WorkspaceList } from "../components/WorkspaceList";
import { SearchOutcomeTitle } from "../components/SearchOutcomeTitle";
import { ComeBackButton } from "../components/ComeBackButton";


export default async function SearchPage({ searchParams }: Props) {
    const params = await searchParams;

    const data = await getWorkspaceSets({
        searchParams: Promise.resolve({
            budget: params.budget as string || null,
            space: params.space as string || null,
            color: params.color as string || null,
        })
    });

    return (
        <>
            <SearchOutcomeTitle />
            <WorkspaceList workspaceSets={data.data} />
            <ComeBackButton />
        </>
    )
}