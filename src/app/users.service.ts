import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';


@Injectable({
  //  is essential in creating a service because angular uses it to define a service class that might require dependencies
  providedIn: 'root'
  //  reponsible for creating an instance of the service and making it avaiable throughout the application
})

export class UsersService {

  private userName: string;
  private apiKey: string = environment.apiKey;
  constructor(public http: HttpClient) {
    console.log('service is now ready');
    this.userName = 'hannahchege';
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