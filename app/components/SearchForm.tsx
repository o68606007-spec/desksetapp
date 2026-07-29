"use client"

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { FormData } from "../../domain/params";

export function SearchForm() {
    
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data: FormData) => {
        // Handle form submission
        const params = new URLSearchParams();
        if (data.budget) {
            params.set("budget", data.budget);
        }

        if (data.space) {
            params.set("space", data.space);
        }

        if (data.color) {
            params.set("color", data.color);
        }

        if (!data.budget && !data.space && !data.color) {
        alert("1つ以上条件を選択してください");
        return;
        }
        router.push(`/search?${params}`);
    });

    return (
        <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-lg">
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
        >
            {/* 予算 */}
            <div>
            <label className="mb-2 block font-medium">
                予算
            </label>

            <select
                {...register("budget")}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            >
                <option value="">選択してください</option>
                <option value="50000">5万円</option>
                <option value="100000">10万円</option>
                <option value="150000">15万円</option>
            </select>
            </div>

            {/* スペース */}
            <div>
            <label className="mb-2 block font-medium">
                スペース
            </label>

            <select
                {...register("space")}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            >
                <option value="">選択してください</option>
                <option value="100">100cm</option>
                <option value="150">150cm</option>
                <option value="200">200cm</option>
            </select>
            </div>

            {/* 色 */}
            <div>
            <label className="mb-2 block font-medium">
                色
            </label>

            <select
                {...register("color")}
                className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            >
                <option value="">選択してください</option>
                <option value="white">白</option>
                <option value="black">黒</option>
                <option value="brown">茶</option>
            </select>
            </div>

            <button
            type="submit"
            className="rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
            >
            検索
            </button>
        </form>
        </div>
    )
}
