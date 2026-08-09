import { getWorkSpaceSetsDetailPage } from "../../lib/GetWorkSpaceSetsDetailPageLib";
import { getWorkSpaceItems } from "../../lib/GetWorkSpaceItems";
import { ItemDetailInformation } from "./ItemDetailInformaiton";
import { ItemDetailCard } from "./ItemDetailCard";


export async function ItemDetail({ id }: { id: string }) {
    const setData = await getWorkSpaceSetsDetailPage(id);
    const itemsData = await getWorkSpaceItems(id);
    return (
        <div className="mx-auto mt-10 max-w-6xl rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <ItemDetailInformation item={setData[0]} />
            <ItemDetailCard item={itemsData} />
        </div>
    )
}