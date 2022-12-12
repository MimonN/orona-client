import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CleaningType } from 'src/app/_interfaces/cleaning-type/cleaning-type.model';
import { CleaningTypeCreate } from 'src/app/_interfaces/cleaning-type/cleaningTypeCreate.model';
import { CleaningTypeUpdate } from 'src/app/_interfaces/cleaning-type/cleaningTypeUpdate.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CleaningTypeRepositoryService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  public getCleaningTypes() {
    return this.http.get<CleaningType[]>(this.baseApiUrl + '/api/CleaningType/GetAllCleaningTypes');
  }

  public getCleaningTypeById(id: number) {
    return this.http.get<CleaningType>(this.baseApiUrl + '/api/CleaningType/GetCleaningTypeById/' + id);
  }

  public createCleaningType(createCleaningTypeRequest: CleaningTypeCreate) {
    return this.http.post<CleaningTypeCreate>(this.baseApiUrl + '/api/CleaningType/CreateCleaningType', createCleaningTypeRequest);
  }
  
  public updateCleaningType(id: number, updateCleaningTypeRequest: CleaningTypeUpdate) {
    return this.http.put<CleaningTypeUpdate>(this.baseApiUrl + '/api/CleaningType/UpdateCleaningType/' + id, updateCleaningTypeRequest);
  }

  public deleteCleaningType(id: number) {
    return this.http.delete<CleaningType>(this.baseApiUrl + '/api/CleaningType/DeleteCleaningType/' + id);
  }
}