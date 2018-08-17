import { Injectable } from '@angular/core';
import{ Users} from './users';
@Injectable()
  // providedIn: 'root'
// }
export class UsersService {
  getUsers(){
    return Users;

  // constructor() { }
}
}