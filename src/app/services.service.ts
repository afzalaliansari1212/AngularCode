import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor( private http: HttpClient) { }

  getPost(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
  }
  deletePost(id:any){
    return this.http.delete<any>("https://jsonplaceholder.typicode.com/posts/"+id)
  }
  addPost(form:any){
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts",{form})
  }
  editPost(id:any,form:any){
    return this.http.put<any>("https://jsonplaceholder.typicode.com/posts/"+id,{form})
  }
 
}
