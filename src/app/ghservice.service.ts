
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GhserviceService {
  username: string;
  constructor(private http: HttpClient) {
    this.username = 'claudiahW'
   }
   getUser(username) {
    return this.http.get("https://api.github.com/users/"+ username +"?access_token=" + environment.apiUrl)
    .pipe(((response: any) => response));
  }
  getRepos(username) {
    return this.http.get("https://api.github.com/users/"+ username + "/repos?access_token=" + environment.apiUrl)
    .pipe(((response: any) => response));
}
}
