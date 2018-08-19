import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment/environments'

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private userName: string;
  private apiKey: string = environment.apiKey;

  constructor(public http: HttpClient) {
    console.log('service is now ready');
    this.userName = 'Hannah';
  }
  getUsers(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + this.apiKey)
  }
  getUserRepos() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?access_token=" + this.apiKey)
  // constructor() { }
}

updateProfile(userName: string) {
  this.userName = userName;
}
}