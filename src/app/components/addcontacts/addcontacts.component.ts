import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icontact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.scss']
})
export class AddcontactsComponent implements OnInit {
  public addContactList:Icontact =
  {
    id:"",
   saveTo:"phone",
   firstName:"",
   lastName:"",
   middleName:"",
   mobileNumber:"",
   homeNumber:"",
   otherNumber:"",
   workNumber:"",
   homeEmail:"",
   workEmail:"",
   otherEmail:"",
   whatsapp:'',
   facebook:"",
   ticktok:"",
   twitter:"",
   instagram:"",
   linkedin:"",
   otherMedia:""
  } 

  choice:string = 'phone'
  val:any = 300;
  drop: boolean = true;
  dropA: boolean = this.drop;
  dropB: boolean = this.drop;
  dropC: boolean = this.drop;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {  }

  submit(){
    if (this.addContactList.firstName == "" || this.addContactList.mobileNumber =="") {
    return
    }
    this.contactService.convertToNumber(this.addContactList) 
    this.contactService.addContact(this.addContactList).subscribe(
    {
      next:(res)=>{
        this.contactService.clean()
          this.router.navigate(['/contacts'])
      },
      error:(err)=> {
        console.log(err);
      },
    }
  )
    
  }
  choose(e:any){
    this.choice = e.value;
    this.contactService.clean()
    if(this.choice === 'sim'){
      this.val = 15
    }
    else this.val = 300
  }
 
  dropdown():boolean{
    return this.drop = !this.drop
  }
  dropdownA():boolean{
    return this.dropA = !this.dropA
  }
  dropdownB():boolean{
    return this.dropB = !this.dropB
  }
  dropdownC():boolean{
    return this.dropC = !this.dropC
  }

}
