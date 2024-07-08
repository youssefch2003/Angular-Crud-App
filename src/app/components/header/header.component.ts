import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask : boolean = false ;
  subscription : Subscription = new Subscription();;
  constructor(private uiservice:UiService,
    private router:Router
  ) {
    this.subscription =this.uiservice.onToggle().subscribe((value)=>(this.showAddTask = value))
  }

  ngOnInit(): void {
    
  }
  toggleAddTask() {
      this.uiservice.toggleAddTask() ;

 }
 hasRoute(route:string){
  return this.router.url === route;
 }
}
