import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';



@Injectable({
  providedIn: 'root'
})
export class ValoremonService {


  readonly URL_API = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  getTier(stats: any){

    return this.http.post(this.URL_API + '/gettier', stats);

  }
}
