import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CleaningTypeRepositoryService } from 'src/app/shared/services/cleaning-type-repository.service';
import { ProductRepositoryService } from 'src/app/shared/services/product-repository.service';
import { WindowTypeRepositoryService } from 'src/app/shared/services/window-type-repository.service';
import { CleaningType } from 'src/app/_interfaces/cleaning-type/cleaning-type.model';
import { ProductCreate } from 'src/app/_interfaces/product/product-create.model';
import { WindowType } from 'src/app/_interfaces/window-type/window-type.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  cleaningTypeList: CleaningType[];
  windowTypeList: WindowType[];
  createProductRequest: ProductCreate;
  @ViewChild('productForm') form: NgForm;

  constructor(
    private productRepo: ProductRepositoryService,
    private cleaningTypeRepo: CleaningTypeRepositoryService,
    private windowTypeRepo: WindowTypeRepositoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCleaningTypeList();
    this.getWindowTypeList();
  }

  onSubmit() {
    this.createProductRequest = {
      price: this.form.value.price,
      windowTypeId: this.form.value.windowTypeId,
      cleaningTypeId: this.form.value.cleaningTypeId
    };

    this.productRepo.createProduct(this.createProductRequest)
    .subscribe({
      next: () => {
        this.router.navigate(['product/list']);
      }
    });
  }

  getCleaningTypeList() {
    this.cleaningTypeRepo.getCleaningTypes()
    .subscribe({
      next: (response) => {
        this.cleaningTypeList = response;
      }
    })
  }

  getWindowTypeList() {
    this.windowTypeRepo.getWindowTypes()
    .subscribe({
      next: (response) => {
        this.windowTypeList = response;
      }
    })
  }
}
