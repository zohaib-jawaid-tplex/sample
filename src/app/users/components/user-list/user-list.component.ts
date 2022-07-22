import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersInfoList : any = [];
  @Input() listUsers : any = [];
  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }


  getDetails(e : any){
    this._router.navigate(['/user/detail'] , {state: {details: e}})
  }

}
