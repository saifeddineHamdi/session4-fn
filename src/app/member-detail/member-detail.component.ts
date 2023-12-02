import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent  implements OnInit{
 
  id: any;
  member:any;
 
  constructor(private membersService:MemberService,private route: ActivatedRoute,) {}



  ngOnInit(): void {
  

      this.id = this.route.snapshot.params['id'];
 

      this.member = this.membersService.getMemberById(this.id);

      console.log(  this.membersService.getMemberById(this.id))

    
}

}
