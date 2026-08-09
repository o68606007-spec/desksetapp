import { DetailItemsInforomation } from "../../domain/params";

export const ItemDetailInformation = ({item}: {item: DetailItemsInforomation}) => {
    return (
            <div key={item.id} className="mb-4 text-center">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-gray-600">予算: {item.budget}</p>
                <p className="text-gray-600">部屋の大きさ: {item.space}</p>
                <p className="text-gray-600">色: {item.color}</p>
                <p className="text-gray-600">用途: {item.use_case}</p>
            </div>
    );
}