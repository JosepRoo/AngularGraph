import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarPieService {

  constructor(
    private _http: HttpClient
  ) { }

  getPieData(): Observable<any> {
    return this._http.get('http://localhost:3000/bar-pie-data');
  }
}
