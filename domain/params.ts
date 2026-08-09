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

export type DetailItemsInforomation = {
    id: string,
    title: string,
    budget: string,
    space: string,
    color: string,
    use_case: string,
}


export type DetailItemsProps = {
    id: string,
    category: string,
    item_name: string,
    image_url: string,
    url: string,
}