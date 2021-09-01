import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
// @Component({
//   selector: 'sidenav-autosize-example',
//   templateUrl: 'sidenav-autosize-example.html',
//   styleUrls: ['sidenav-autosize-example.css'],
// })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.min(2)),
    lastName: new FormControl(''),
  });
  //constructor(private httpService:HttpService){ }
  testProp=new FormControl('')
  constructor(private router:Router,private fb:FormBuilder){
    this.router.events.subscribe((e)=>{
      console.log(e)
    })
   }
  title = 'Hahaha nice';
  jsonValue={}
  user={
    name:"ferd",
    age:'150',
    id:4,
    isColored:false
  }
  showUser:boolean=true;
  // handleEvent(){
  //   this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/2')
  //   .subscribe((res)=>{
  //     console.log(res)
  //   this.jsonValue=res
  //   })
  // }
  handleAnotherEvent(event:any){
console.log(event)
  }
  //posts:any=[]
  //posts:any=this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts')
  //.subscribe()
//   getPosts():any{
//     this.httpService.getRequest('https://jsonplaceholder.typicode.com/posts')
//     .subscribe((res)=>{
//       this.posts=res;
//     })
// }
getPosts(){}
ngOnInit(){
  //this.getPosts()
}
goToRoute(route:string='/second'):void{
  this.router.navigateByUrl(route)
  .then(()=>{console.log(this.router.url)})
}
updateName() {
  this.testProp.setValue('Nancy');
}
profileTwo=this.fb.group({
  firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
})
})
}
