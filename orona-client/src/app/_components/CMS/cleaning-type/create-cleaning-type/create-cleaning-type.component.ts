import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CleaningTypeRepositoryService } from 'src/app/shared/services/cleaning-type-repository.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { CleaningTypeCreate } from 'src/app/_interfaces/cleaning-type/cleaningTypeCreate.model';

@Component({
  selector: 'app-create-cleaning-type',
  templateUrl: './create-cleaning-type.component.html',
  styleUrls: ['./create-cleaning-type.component.css']
})
export class CreateCleaningTypeComponent {
  createCleaningTypeRequest: CleaningTypeCreate;
  cleaningName: string;
  @ViewChild('cleaningTypeForm') form: NgForm;
  errorMessage: string = '';
  
  constructor(private repository: CleaningTypeRepositoryService, private router: Router, private errorHandler: ErrorHandlerService) {}
  
    onSubmit(){
      this.createCleaningTypeRequest = {
        cleaningName: this.form.value.cleaningName
      }
  
      this.repository.createCleaningType(this.createCleaningTypeRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['cleaning-type/list']);
        },
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
        }
      })
    }
}
