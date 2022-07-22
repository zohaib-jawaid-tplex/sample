import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FeedRoutingModule} from './feed-routing.module';
import { ListComponent } from './list/list.component';
import { ListService } from './service/list.service';
@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FeedRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ListService]
})
export class FeedModule { }
