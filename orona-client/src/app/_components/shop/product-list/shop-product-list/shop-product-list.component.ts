import { Component, OnInit } from '@angular/core';
import { WindowTypeRepositoryService } from 'src/app/shared/services/window-type-repository.service';
import { WindowTypeWithProdAndClean } from 'src/app/_interfaces/window-type/windowTypeWithProdAndClean.model';

@Component({
  selector: 'app-shop-product-list',
  templateUrl: './shop-product-list.component.html',
  styleUrls: ['./shop-product-list.component.css']
})
export class ShopProductListComponent implements OnInit{
  windowTypeList: WindowTypeWithProdAndClean[];

  constructor(private windowTypeRepo: WindowTypeRepositoryService) {}

  ngOnInit() {
    this.windowTypeRepo.getWindowTypesWithProductsAndCleaningTypes()
    .subscribe({
      next: (response) => {
        this.windowTypeList = response;
        console.log(this.windowTypeList);
      }});
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  };
}
