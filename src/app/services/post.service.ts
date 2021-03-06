import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  // private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
   }

}

