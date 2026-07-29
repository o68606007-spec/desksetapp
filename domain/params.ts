export type Props = {
    searchParams: Promise<{
        budget: String | null,
        space: String | null,
        color: String | null,
    }>
}

export type FormData = {
    budget: string | null,
    space: string | null,
    color: string | null,
}