import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

import { Users } from '../users';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UsersService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users: Users[];
constructor(private usersService:UsersService) {
  this.usersService.getUsers()
   }

  ngOnInit() {
  }

}
