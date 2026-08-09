import Link from "next/link";

export function ComeBackButton() {
    return (
        <div className="flex justify-center mt-6 ">
            <Link
                href="/"
                className="w-44 rounded-md bg-gray-700 px-4 py-2 text-center text-white transition hover:bg-gray-800"
            >
                戻る
            </Link>
        </div>
    )
}