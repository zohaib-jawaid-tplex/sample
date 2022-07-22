import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userPersonalInformation :any;
  constructor(
    private _route: Router,
  ) { 
    this.userPersonalInformation = this._route.getCurrentNavigation() && this._route.getCurrentNavigation()?.extras ? this._route.getCurrentNavigation()?.extras.state : null;

  }
  ngOnInit(): void {
  }

}
