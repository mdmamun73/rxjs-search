import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable, of , empty} from 'rxjs';

import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  public baseUrl ="https://api.github.com/search/repositories";
  public searchResult : any;
  constructor(private http : HttpClient) {

   } 

   public _serachEntries(term) : Observable<any> {
      if (term === "") {
        return of(null);
      }else{
        let params = { q:term}
        return this.http.get(this.baseUrl, {params}).pipe(
            map(response => this.searchResult = response["items"])

        );
      }


   }

   public serachEntries(term){
      return this._serachEntries(term);
   }
   
   
}
