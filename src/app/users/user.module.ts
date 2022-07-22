import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {UserRoutingModule} from './user-routing-module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserService } from './service/user.service';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
  
    UserListComponent,
       UserDetailsComponent,
       ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
