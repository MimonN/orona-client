import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CleaningTypeRepositoryService } from 'src/app/shared/services/cleaning-type-repository.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { ProductRepositoryService } from 'src/app/shared/services/product-repository.service';
import { WindowTypeRepositoryService } from 'src/app/shared/services/window-type-repository.service';
import { CleaningType } from 'src/app/_interfaces/cleaning-type/cleaning-type.model';
import { ProductUpdate } from 'src/app/_interfaces/product/product-update.model';
import { Product } from 'src/app/_interfaces/product/product.model';
import { WindowType } from 'src/app/_interfaces/window-type/window-type.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  cleaningTypeList: CleaningType[];
  windowTypeList: WindowType[];
  productUpdateRequest: ProductUpdate;
  productDetails: Product;
  id: number;
  @ViewChild('productForm') form: NgForm;
  errorMessage: string = '';

  constructor(
    private productRepo: ProductRepositoryService,
    private cleaningTypeRepo: CleaningTypeRepositoryService,
    private windowTypeRepo: WindowTypeRepositoryService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.getCleaningTypeList();
    this.getWindowTypeList();

    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = parseInt(params.get('id'));

        if(this.id){
          this.productRepo.getProductById(this.id)
          .subscribe({
            next: (response) => {
              this.productDetails = response;
            }
          })
        }
      }
    })
  }

  onSubmit() {
    this.productUpdateRequest = {
      price: this.form.value.price,
      windowTypeId: this.form.value.windowTypeId,
      cleaningTypeId: this.form.value.cleaningTypeId
    };

    this.productRepo.updateProduct(this.id, this.productUpdateRequest)
    .subscribe({
      next: () => {
        this.router.navigate(['cms/product/list']);
      },
      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      }
    });
  }

  getCleaningTypeList() {
    this.cleaningTypeRepo.getCleaningTypes().subscribe({
      next: (response) => {
        this.cleaningTypeList = response;
      },
    });
  }

  getWindowTypeList() {
    this.windowTypeRepo.getWindowTypes().subscribe({
      next: (response) => {
        this.windowTypeList = response;
      },
    });
  }
}
