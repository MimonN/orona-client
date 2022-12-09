import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WindowTypeRepositoryService } from 'src/app/shared/services/window-type-repository.service';
import { WindowType } from 'src/app/_interfaces/window-type/window-type.model';
import { WindowTypeUpdate } from 'src/app/_interfaces/window-type/windowTypeUpdate.model';

@Component({
  selector: 'app-update-window-type',
  templateUrl: './update-window-type.component.html',
  styleUrls: ['./update-window-type.component.css']
})
export class UpdateWindowTypeComponent implements OnInit{
  updateWindowTypeRequest: WindowTypeUpdate;
  windowTypeDetails: WindowType;
  windowTypeName: string;
  imageUrl: string;
  @ViewChild('windowTypeForm') form: NgForm;
  response: any = '';
  id: number;
  
  constructor(private repository: WindowTypeRepositoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = parseInt(params.get('id'));

        if(this.id){
          this.repository.getWindowTypeById(this.id)
          .subscribe({
            next: (response) => {
              this.windowTypeDetails = response;
            }
          })
        }
      }
    })
  }
  
    onSubmit(){
      this.updateWindowTypeRequest = {
        windowTypeName: this.form.value.windowType,
        imageUrl: this.response.dbPath
      }
  
      this.repository.updateWindowType(this.windowTypeDetails.id, this.updateWindowTypeRequest)
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
