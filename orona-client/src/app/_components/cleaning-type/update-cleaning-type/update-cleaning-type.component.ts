import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CleaningTypeRepositoryService } from 'src/app/shared/services/cleaning-type-repository.service';
import { CleaningType } from 'src/app/_interfaces/cleaning-type/cleaning-type.model';
import { CleaningTypeUpdate } from 'src/app/_interfaces/cleaning-type/cleaningTypeUpdate.model';

@Component({
  selector: 'app-update-cleaning-type',
  templateUrl: './update-cleaning-type.component.html',
  styleUrls: ['./update-cleaning-type.component.css'],
})
export class UpdateCleaningTypeComponent {
  updateCleaningTypeRequest: CleaningTypeUpdate;
  cleaningTypeDetails: CleaningType;
  cleaningName: string;
  @ViewChild('cleaningTypeForm') form: NgForm;
  id: number;

  constructor(
    private repository: CleaningTypeRepositoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = parseInt(params.get('id'));

        if (this.id) {
          this.repository.getCleaningTypeById(this.id).subscribe({
            next: (response) => {
              this.cleaningTypeDetails = response;
            },
          });
        }
      },
    });
  }

  onSubmit() {
    this.updateCleaningTypeRequest = {
      cleaningName: this.form.value.cleaningName,
    };

    this.repository
      .updateCleaningType(
        this.cleaningTypeDetails.id,
        this.updateCleaningTypeRequest
      )
      .subscribe({
        next: () => {
          this.router.navigate(['cleaning-type/list']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
