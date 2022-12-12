import { HttpErrorResponse } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { ProductRepositoryService } from 'src/app/shared/services/product-repository.service';
import { Product } from 'src/app/_interfaces/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList: Product[];
  errorMessage: string = '';
  modalRef?: BsModalRef;
  message?: string;

  constructor(private repository: ProductRepositoryService, private errorHandler: ErrorHandlerService, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts = () => {
    this.repository.getAllProducts()
    .subscribe({
      next: (products: Product[]) => this.productList = products,
      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      }
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }
 
  confirm(id: number): void {
    this.message = 'Confirmed!';
    this.deleteProduct(id);
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id).subscribe({
      next: (response) => {
        window.location.reload();
      }
    })
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }
}
