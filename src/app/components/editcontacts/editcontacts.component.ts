import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-editcontacts',
  templateUrl: './editcontacts.component.html',
  styleUrls: ['./editcontacts.component.scss']
})
export class EditcontactsComponent implements OnInit {
  editContactList: any;
  choice: string  = ""
  val:any = 300;
  drop: boolean = true;
  dropA: boolean = this.drop;
  dropB: boolean = this.drop;
  dropC: boolean = this.drop;
  id: any;

  constructor(private contactservice:ContactService, private route: ActivatedRoute, private router:Router) { 
    this.editContactList = this.contactservice.addContactList
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next:(params)=>{
       this.id = params.get("id") 
        if (this.id) {
          this.contactservice.getOneContact(this.id).subscribe(
            {
              next:(response)=>{
                this.responseFunc(response) 
              },
              error:(err)=>{
                console.log(err); 
              }
            }
          )
        }
        }
      }
    )

  }

  choose(){
    if(this.choice === 'sim'){
      this.val = 15
    }
    else this.val = 300
  }

  responseFunc(response:Icontact){
    this.editContactList = response
    this.contactservice.startsWithfunc(response)   
    this.choice = this.editContactList.saveTo; 
    this.choose()   
  }

  submit(){
    if (this.editContactList.firstName == "" || this.editContactList.mobileNumber =="") {
    return
    }
    this.contactservice.updateContact(this.editContactList,this.id).subscribe(
      {
        next:(response)=>{
         this.responseFunc(response)
         this.router.navigate(['/contacts',this.id])
        },
        error:(err)=>{
          console.log(err); 
        }
      }
    )
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
