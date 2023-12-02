import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  members: any[] = [];

  detailmembers: any;

  newMember: any = {};
  isdelete=false;
  nb: any;

  

  constructor(private membersService:MemberService,private router: Router) {}

  ngOnInit() {

     this.members = this.membersService.getMemebers();

      this.membersService.searchQuery$.subscribe(query => {
       
      this.members = this.filterMembers(query);

      this.nb = this.members.length


    });

  }

  
  filterMembers(query: string): any[] {
    
    if (!this.members) {
      return [];
    }

    
    return this.members.filter(member =>
      member && member.firstname && member.firstname.toLowerCase().includes(query.toLowerCase())
    );
  }


  deleteMemeber(id: number) {
    this.membersService.deleteMember(id);
    this.members = this.membersService.getMemebers();  
    this.isdelete=true

    setTimeout(() => {
      this.isdelete = false;
    }, 2000);

  }


  addMemeber():void {

if(this.newMember){

  this.membersService.addMember(this.newMember);
  this.newMember = {}; 
  this.members = this.membersService.getMemebers();  
  console.log("ADD")
}
else{
  console.log("NN")
}

  }


  showMemberDetail(memberid: any) {
    this.router.navigate(['/member', memberid]);
  }



  updateMember(member: any): void {
    
    console.log('Mise à jour du membre:', member);
    // Vous pouvez appeler un service de mise à jour, afficher un formulaire de mise à jour, etc.
  }


  



}