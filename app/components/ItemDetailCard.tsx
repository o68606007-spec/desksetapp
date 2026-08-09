import { DetailItemsProps } from "../../domain/params";

export const ItemDetailCard = ({item}: {item: DetailItemsProps[]}) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
            {item.map((item) => (
                <div key={item.id} className="mb-4">
                    <h3 className="text-lg font-semibold">{item.item_name}</h3>
                    <p className="text-gray-600">{item.category}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        View Item
                    </a>
                </div>
            ))}
            </div>
        </>
    );

}