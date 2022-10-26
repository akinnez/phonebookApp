import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icontact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-allcontacts',
  templateUrl: './allcontacts.component.html',
  styleUrls: ['./allcontacts.component.scss']
})

export class AllcontactsComponent implements OnInit {
public form = "";
response:any
chkd = false;
chkd1 = false;
val2 = "none"
val = "block"
val1 =  "none"
contactID:Array<string> = []
private alpha:Array<string>
allcontact:any[] = []
public contacts:Icontact[] = []; 

constructor(private contactservice: ContactService, private router:Router) {
    this.alpha = this.contactservice.alpha;
     this.contactservice.getAllContact()
    .subscribe({
      next:(contact)=>{
        this.contacts = contact
        this.allcontact = this.contacts.sort((a:any,b:any)=>{
          return a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
        })
        this.startsWithfunc()
        },
        error:(response)=> console.log(response)
        
     })
   }

   checkeAll(e:any,id:string){
        console.log(e.checked, id);
        if (e.checked) {
          if (this.contactID.includes(id)) {
            return
          }
          this.contactID.push(id)
          
          if (this.contactID.length == this.allcontact.length) {
             this.chkd = true;
        }
      }
        else {
          this.contactID.splice(this.contactID.indexOf(id),1)
          if (this.contactID.length !== this.allcontact.length) {
            this.chkd = false
          }
        }
   }

   getVal(e:any){
    
    this.chkd = e.target.checked
    this.chkd1 = this.chkd
        
       if (this.chkd && this.chkd1) {
          for (let index = 0; index < this.allcontact.length; index++) {
            if (!this.contactID.includes(this.allcontact[index].id)) {
              this.contactID.push(this.allcontact[index].id)
            }
          }
        }else {this.contactID = []} 
        
   }
   startsWithfunc(){
    for (let index = 0; index < this.alpha.length; index++) {
      for (let i = 0; i < this.allcontact.length; i++) {
        if(this.allcontact[i].firstName.toLocaleLowerCase().startsWith(this.alpha[index])){
          this.allcontact[i].startsWith = this.alpha[index].toUpperCase();
        }
    }
 }
   }
   delete(){
    this.contactservice.deleteMultiple(this.contactID).subscribe(
      {
        next:(response)=>{
          this.allcontact = response.value
          this.val2 = "none";
          this.chkd = false
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
  }
   del(){
    this.val2 = "block"
    this.chkd = false
   }
   dismiss(){
    this.val2 = "none"
    this.chkd = false
    this.chkd1 = false
    this.contactID = []
   }

  ngOnInit(): void {
  //  this.allcontact = this.contacts
        
  }
  search(e:any){
    this.allcontact = this.contacts.filter((entry):any=>{
      if (entry.middleName == null) {
        entry.middleName = " "
      }
      if (entry.lastName == null || entry.middleName==" ") {
        entry.lastName=" "
      }

     return entry.firstName.toLowerCase().trim().includes(e.target.value.toLowerCase())  || 
            entry.middleName.toLowerCase().trim().includes(e.target.value.toLowerCase()) ||
            entry.lastName.toLowerCase().trim().includes(e.target.value.toLowerCase())
             
    })
  }
  changeVal(){
    this.allcontact = []
    this.val = this.val1; this.val1 = "block"
}
  cancel(){this.val = this.val1;this.val1 = "none";this.allcontact = this.contacts;
  this.contactservice.clean()
  var clear:any = document.querySelector('.clear');
    clear.value = " "
  }
}

