import { HttpErrorResponse } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  modalRef?: BsModalRef;
  message?: string;

  constructor(private repository: WindowTypeRepositoryService, private errorHandler: ErrorHandlerService, private modalService: BsModalService, private router: Router) {}

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }
 
  confirm(id: number): void {
    // this.message = 'Confirmed!';
    this.deleteWindowType(id);
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }

  deleteWindowType(id: number) {
    this.repository.deleteWindowType(id).subscribe({
      next: (response) => {
        window.location.reload();
      }
    })
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }
}
