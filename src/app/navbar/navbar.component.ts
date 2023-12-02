import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  searchQuery: string = '';

  
  constructor(private membersService:MemberService,private router: Router) {}


  onSearchChange(query: string): void {
    this.membersService.setSearchQuery(query);

    console.log("ouii")
  }


}
