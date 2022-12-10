import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CleaningTypeRepositoryService } from 'src/app/shared/services/cleaning-type-repository.service';
import { CleaningTypeCreate } from 'src/app/_interfaces/cleaning-type/cleaningTypeCreate.model';

@Component({
  selector: 'app-create-cleaning-type',
  templateUrl: './create-cleaning-type.component.html',
  styleUrls: ['./create-cleaning-type.component.css']
})
export class CreateCleaningTypeComponent {
  createCleaningTypeRequest: CleaningTypeCreate;
  cleaningTypeName: string;
  @ViewChild('cleaningTypeForm') form: NgForm;
  
  constructor(private repository: CleaningTypeRepositoryService, private router: Router) {}
  
    onSubmit(){
      this.createCleaningTypeRequest = {
        cleaningTypeName: this.form.value.cleaningType
      }
  
      this.repository.createCleaningType(this.createCleaningTypeRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['cleaning-type/list']);
        }
      })
    }
}
