export function WorkspaceList({ workspaceSets }: { workspaceSets: any[] }) {
    return (
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {workspaceSets.map((workspace) => (
            <div
            key={workspace.id}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
            <h2 className="mb-4 text-xl font-bold text-gray-800">
                {workspace.title}
            </h2>

            <div className="space-y-2 text-gray-600">
                <p>
                <span className="font-semibold">予算：</span>
                ¥{workspace.budget.toLocaleString()}
                </p>

                <p>
                <span className="font-semibold">スペース：</span>
                {workspace.space} cm
                </p>

                <p>
                <span className="font-semibold">カラー：</span>
                {workspace.color}
                </p>

            </div>

            <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700">
                詳細を見る
            </button>
            </div>
        ))}
        </div>
    )
}