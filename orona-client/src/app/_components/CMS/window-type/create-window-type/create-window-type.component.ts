import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { WindowTypeRepositoryService } from 'src/app/shared/services/window-type-repository.service';
import { WindowTypeCreate } from 'src/app/_interfaces/window-type/windowTypeCreate.model';

@Component({
  selector: 'app-create-window-type',
  templateUrl: './create-window-type.component.html',
  styleUrls: ['./create-window-type.component.css'],
})
export class CreateWindowTypeComponent {
  createWindowTypeRequest: WindowTypeCreate;
  windowTypeName: string;
  imageUrl: string;
  @ViewChild('windowTypeForm') form: NgForm;
  response: string = '';
  errorMessage: string = '';

  constructor(
    private repository: WindowTypeRepositoryService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {}

  onSubmit() {
    this.createWindowTypeRequest = {
      windowTypeName: this.form.value.windowType,
      imageUrl: this.response,
    };

    this.repository.createWindowType(this.createWindowTypeRequest).subscribe({
      next: () => {
        this.router.navigate(['window-type/list']);
      },
      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      }
    });
  }

  uploadFinished = (event) => {
    this.response = event.dbPath;
  };

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  };
}
