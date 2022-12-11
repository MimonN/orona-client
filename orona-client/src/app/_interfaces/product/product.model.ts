import { CleaningType } from "../cleaning-type/cleaning-type.model";
import { WindowType } from "../window-type/window-type.model";

export interface Product {
    id: number,
    description: string,
    price: number,
    dateCreated?: Date,
    dateUpdated?: Date,
    cleaningTypeId: number,
    cleaningType: CleaningType[],
    windowTypeId: number,
    windowType: WindowType[]
}