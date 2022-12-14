import { Product } from "../product/product.model"

export interface WindowTypeWithProdAndClean{
    id: number,
    windowTypeName: string,
    imageUrl: string
    product: Product[]
}