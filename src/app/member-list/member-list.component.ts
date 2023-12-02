import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { timeout } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: any[] = [];
  newMember: any = {};


  // Dans votre composant
// newMember: {
//   firstname: string;
//   lastname: string;
//   phone: string;
//   email: string;
//   imageUrl: string;
//   role: string;
// } = {
//   firstname: '',
//   lastname: '',
//   phone: '',
//   email: '',
//   imageUrl: '',
//   role: '',
// };


submitted = false;


  isadd=false;

  constructor(private membersService:MemberService, private router: Router) {}

  ngOnInit() {
    this.members = this.membersService.getMemebers();
  }

  deleteMemeber(id: number) {
    this.membersService.deleteMember(id);
    this.members = this.membersService.getMemebers();  
  }


  addMember():void {
    


    if(

        this.newMember.firstname &&
        this.newMember.lastname &&
        this.newMember.phone&& 
        this.newMember.email &&
        this.newMember.imageUrl &&
        this.newMember.role 
       
       )
       
       {


      this.membersService.addMember(this.newMember);
      // this.newMember = {}; 
      this.members = this.membersService.getMemebers();  
      console.log("dsdsdsdsddsd")
    
      this.isadd=true;
    
      
    
     setTimeout(() => {
      this.isadd = false;
    }, 2000);

    }


    else{
      console.log("leeeeeeeeeeee")
    }
 
 
  }


showdetail(memberid:any):void{

this.router.navigate(["/member", memberid])

}



}