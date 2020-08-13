import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarDonutService {

  constructor(
    private _http: HttpClient
  ) { }

  getDonutData(): Observable<any> {
    return this._http.get('http://localhost:3000/bar-donut-data');
  }
}
