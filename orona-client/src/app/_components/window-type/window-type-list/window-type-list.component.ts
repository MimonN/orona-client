import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { WindowTypeRepositoryService } from 'src/app/shared/services/window-type-repository.service';
import { WindowType } from 'src/app/_interfaces/window-type/window-type.model';

@Component({
  selector: 'app-window-type-list',
  templateUrl: './window-type-list.component.html',
  styleUrls: ['./window-type-list.component.css']
})
export class WindowTypeListComponent {
  windowTypeList: WindowType[];
  errorMessage: string = '';

  constructor(private repository: WindowTypeRepositoryService, private errorHandler: ErrorHandlerService) {}

  ngOnInit(): void {
    this.getAllWindowTypes();
  }

  private getAllWindowTypes = () => {
    this.repository.getWindowTypes()
    .subscribe({
      next: (windowTypes: WindowType[]) => this.windowTypeList = windowTypes,
      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      } 
    })
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }
}
