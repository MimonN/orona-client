import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCreate } from 'src/app/_interfaces/product/product-create.model';
import { ProductUpdate } from 'src/app/_interfaces/product/product-update.model';
import { Product } from 'src/app/_interfaces/product/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get<Product[]>(this.baseApiUrl + '/api/Product/GetAllProducts');
  }

  public getProductById(id: number) {
    return this.http.get<Product>(this.baseApiUrl + '/api/Product/GetProductById/' + id);
  }

  public createProduct(createProductRequest: ProductCreate) {
    return this.http.post<ProductCreate>(this.baseApiUrl + '/api/Product/CreateProduct', createProductRequest);
  }

  public updateProduct(id: number, updateProductRequest: ProductUpdate) {
    return this.http.put<ProductUpdate>(this.baseApiUrl + '/api/Product/UpdateProduct/' + id, updateProductRequest);
  }

  public deleteProduct(id: number) {
    return this.http.delete<Product>(this.baseApiUrl + '/api/Product/DeleteProduct/' + id);
  }
}