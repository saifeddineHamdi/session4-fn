import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AddMemeberComponent } from './add-memeber/add-memeber.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [


  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },
  { path: 'membersList', component: MemberListComponent },
  { path: 'MemberAdd', component: AddMemeberComponent },
  { path: 'member/:id', component: MemberDetailComponent },

  { path: 'contact', component: ContactsComponent },



  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
