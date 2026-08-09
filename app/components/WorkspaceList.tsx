import Link from "next/link";
import Image from 'next/image';

import { FormData } from "../../domain/params";
import { getStorageImageUrl } from "../../lib/GetStorageImageUrl";

export function WorkspaceList({ workspaceSets, searchParams }: { workspaceSets: any[]; searchParams: FormData }) {

    const query = new URLSearchParams({
        budget: searchParams.budget ?? "",
        space: searchParams.space ?? "",
        color: searchParams.color ?? "",
    }).toString();

    const imageListUrls = workspaceSets.map((workspace) => getStorageImageUrl(workspace.image_url));
    
    return (
        <div className="max-w-5xl mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {workspaceSets.map((workspace, index) => (
            <div
            key={workspace.id}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
            <h2 className="mb-4 text-xl font-bold text-gray-800">
                {workspace.title}
            </h2>

            <Image
                src={imageListUrls[index]}
                alt={workspace.title}
                width={400}
                height={300}
                className="mb-4 h-48 w-full rounded-lg object-cover"
            />

            <div className="space-y-2 text-gray-600">
                <p>
                <span className="font-semibold">予算：</span>
                ¥{workspace.budget.toLocaleString()}
                </p>

                <p>
                <span className="font-semibold">スペース（横幅）：</span>
                {workspace.space} cm
                </p>

                <p>
                <span className="font-semibold">カラー：</span>
                {workspace.color}
                </p>

            </div>

            <Link href={`/search/${workspace.id}?${query}`} className="mt-6 block text-center">
                <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700">
                    詳細を見る
                </button>
            </Link>
            </div>
        ))}
        </div>
    )
}