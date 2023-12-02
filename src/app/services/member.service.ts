import { Injectable } from '@angular/core';
 
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  private searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchQuery$: Observable<string> = this.searchQuerySubject.asObservable();



  constructor() { }


  private members: any[] = [


    
    { id: 1, firstname: 'chamseddine', lastname: 'nacer',role:'responsable dev',phone:29225523,email:'chams@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' },
    { id: 2, firstname: 'cherif', lastname: 'khalifa' ,role:'responsable iot',phone:29225523,email:'cherif@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 3, firstname: 'fadwa', lastname: 'fadwa' ,role:'presidente',phone:29225523,email:'fadwa@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 4, firstname: 'hazar', lastname: 'hazar' ,role:'Secrétaire général',phone:29225523,email:'hazar@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 5, firstname: 'ghofran', lastname: 'ghofran' ,role:'finances',phone:29225523,email:'ghofran@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 6, firstname: 'ranya', lastname: 'ranya' ,role:'member actif',phone:29225523,email:'ranya@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    { id: 7, firstname: 'minyar', lastname: 'minyar' ,role:'member actif',phone:29225523,email:'minyar@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 8, firstname: 'sarra', lastname: 'sarra' ,role:'member actif',phone:29225523,email:'sarra@gmail.com',imageUrl: 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png'},
    { id: 9, firstname: 'hiba', lastname: 'hiba' ,role:'Secrétaire général',phone:29225523,email:'hiba@gmail.com',imageUrl: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'},
    
 
  ];

  getMemebers() {
    return this.members;
  }

  getMemberById(id: number) {
    return this.members.find(member => member.id == id);
  }


getmembbyid(memberid:any){
      
  return this.members.find(members=>members.id==memberid)
     
}
  
addMember(member: any) {
    member.id = this.members.length + 1;  
    this.members.push(member);
  }

 
  deleteMember(id: number) {
    this.members = this.members.filter(member => member.id !== id);
  }



  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }
  





  updateMemeber(member: any) {
    const index = this.members.findIndex(e => e.id === member.id);
    if (index !== -1) {
      this.members[index] = member;
    }
  }



}
