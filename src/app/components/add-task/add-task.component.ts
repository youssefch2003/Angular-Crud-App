import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
text: string = "";
day: string = "";
reminder:boolean = false;
showAddTask:boolean=false ;
subscription:Subscription= new Subscription(); 


constructor (private uiservice:UiService){
  this.subscription =this.uiservice.onToggle().subscribe(
    (value)=>(this.showAddTask = value)
  )

}

ngOnInit(): void {
  
}
onSubmit(){
  if(!this.text){
    alert("add texttt");
    return;
  }
  if(!this.day){
    alert("add dayyy")
    return;
  }
  const newTask = {
    text: this.text,
    day: this.day,
    reminder: this.reminder,
  }

 this.onAddTask.emit(newTask);


   this.text="";
 this.day="";
   this.reminder= false;

}
}
