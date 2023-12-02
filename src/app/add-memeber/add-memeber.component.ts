import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-memeber',
  templateUrl: './add-memeber.component.html',
  styleUrls: ['./add-memeber.component.css']
})
export class AddMemeberComponent implements OnInit {
  members: any[] = [];
  newMember: any = {};

  constructor(private membersService:MemberService,  private router: Router) {}

  ngOnInit() {
    // this.members = this.membersService.getMemebers();
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
    
      // this.isadd=true;

      this.router.navigate(['/membersList']);
    
      
    
    //  setTimeout(() => {
    //   this.isadd = false;
    // }, 2000);

    }


    else{
      console.log("leeeeeeeeeeee")
    }
 

 

  }




  // addMemeber():void {

     
    
  //     this.membersService.addMember(this.newMember);
  //     this.newMember = {}; 
  //     this.members = this.membersService.getMemebers();  
      

  //    this.router.navigate(['/membersList']);
   
   
    
  //     }


}
