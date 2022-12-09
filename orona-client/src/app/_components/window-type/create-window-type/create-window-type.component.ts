import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WindowTypeRepositoryService } from 'src/app/shared/services/window-type-repository.service';
import { WindowTypeCreate } from 'src/app/_interfaces/window-type/windowTypeCreate.model';

@Component({
  selector: 'app-create-window-type',
  templateUrl: './create-window-type.component.html',
  styleUrls: ['./create-window-type.component.css']
})
export class CreateWindowTypeComponent {
createWindowTypeRequest: WindowTypeCreate;
windowTypeName: string;
imageUrl: string;
@ViewChild('windowTypeForm') form: NgForm;
response: any = '';

constructor(private repository: WindowTypeRepositoryService, private router: Router) {}

  onSubmit(){
    this.createWindowTypeRequest = {
      windowTypeName: this.form.value.windowType,
      imageUrl: this.response.dbPath
    }

    this.repository.createWindowType(this.createWindowTypeRequest)
    .subscribe({
      next: () => {
        this.router.navigate(['window-type/list']);
      }
    })
  }

  uploadFinished = (event) => {
    this.response = event;
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:5001/${serverPath}`;
  }
}
