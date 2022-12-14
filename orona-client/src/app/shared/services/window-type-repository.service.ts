import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WindowType } from 'src/app/_interfaces/window-type/window-type.model';
import { WindowTypeCreate } from 'src/app/_interfaces/window-type/windowTypeCreate.model';
import { WindowTypeUpdate } from 'src/app/_interfaces/window-type/windowTypeUpdate.model';
import { WindowTypeWithProdAndClean } from 'src/app/_interfaces/window-type/windowTypeWithProdAndClean.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WindowTypeRepositoryService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  public getWindowTypes() {
    return this.http.get<WindowType[]>(this.baseApiUrl + '/api/WindowType/GetAllWindowTypes');
  }

  public getWindowTypesWithProductsAndCleaningTypes() {
    return this.http.get<WindowTypeWithProdAndClean[]>(this.baseApiUrl + '/api/WindowType/GetAllWindowTypesWithProductsAndCleaningTypes');
  }

  public getWindowTypeById(id: number) {
    return this.http.get<WindowType>(this.baseApiUrl + '/api/WindowType/GetWindowTypeById/' + id);
  }

  public createWindowType(createWindowTypeRequest: WindowTypeCreate) {
    return this.http.post<WindowTypeCreate>(this.baseApiUrl + '/api/WindowType/CreateWindowType', createWindowTypeRequest);
  }

  public updateWindowType(id: number, updateWindowTypeRequest: WindowTypeUpdate) {
    return this.http.put<WindowTypeUpdate>(this.baseApiUrl + '/api/WindowType/UpdateWindowType/' + id, updateWindowTypeRequest);
  }

  public deleteWindowType(id: number): Observable<WindowType> {
    return this.http.delete<WindowType>(this.baseApiUrl + '/api/WindowType/DeleteWindowType/' + id);
  }
}
