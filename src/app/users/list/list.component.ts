import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users : any = [];
  constructor(
    private _userService : UserService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._userService.getListUsers().subscribe(res => {
      this.users = res;
    })
  }

}
