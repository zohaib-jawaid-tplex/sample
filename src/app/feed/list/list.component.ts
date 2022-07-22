import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  feedList : any = [];
  constructor(
    private _listService : ListService
  ) { }

  ngOnInit(): void {
    this.getAllList();
  }

  getAllList(){
    this._listService.getFeeds().subscribe(res => {
      console.log(res);
      this.feedList = res;
    })
  }

}
