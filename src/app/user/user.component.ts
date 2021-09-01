import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface UserInterface{
  name:string,
    age:string,
    id:number
    isColored:boolean
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 @Input() user:UserInterface
 @Output() userEvent:EventEmitter<UserInterface>
 isColored:boolean=false;

  constructor() {
    this.userEvent=new EventEmitter<UserInterface>()
    this.user={} as UserInterface
    
   }

  ngOnInit(): void {
    this.user.isColored=this.user.isColored?true:false;
  }
sendUserEvent():void{
this.userEvent.emit(this.user)

}
}
