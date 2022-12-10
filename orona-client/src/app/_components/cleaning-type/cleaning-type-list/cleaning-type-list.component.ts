import { HttpErrorResponse } from '@angular/common/http';
import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CleaningTypeRepositoryService } from 'src/app/shared/services/cleaning-type-repository.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { CleaningType } from 'src/app/_interfaces/cleaning-type/cleaning-type.model';

@Component({
  selector: 'app-cleaning-type-list',
  templateUrl: './cleaning-type-list.component.html',
  styleUrls: ['./cleaning-type-list.component.css'],
})
export class CleaningTypeListComponent {
  cleaningTypeList: CleaningType[];
  errorMessage: string = '';
  modalRef?: BsModalRef;
  message?: string;

  constructor(private repository: CleaningTypeRepositoryService, private errorHandler: ErrorHandlerService, private modalService: BsModalService,
    private router: Router) {}

    ngOnInit(): void {
      this.getAllCleaningTypes();
    }

    private getAllCleaningTypes = () => {
    this.repository.getCleaningTypes()
    .subscribe({
      next: (cleaningTypes: CleaningType[]) => this.cleaningTypeList = cleaningTypes,
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
    this.deleteCleaningType(id);
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }

  deleteCleaningType(id: number) {
    this.repository.deleteCleaningType(id).subscribe({
      next: (response) => {
        window.location.reload();
      }
    })
  }
}
