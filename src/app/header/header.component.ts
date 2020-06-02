import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { TASKS } from '../task-data.component';
import { taskData } from '../task-interface.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  myTaskCount = [];
  teamTaskCount = [];
  constructor(private taskDataService: TaskDataService) { }

  ngOnInit(): void {

    TASKS.forEach(tasks => {
      if(tasks.isGlobal === true){
        this.teamTaskCount.push(tasks);
      }
      if(tasks.isGlobal === false){
        this.myTaskCount.push(tasks);
      }
    })

    this.taskDataService.taskChanged.subscribe((tasks:any) => {
      this.teamTaskCount = [];
      this.myTaskCount = [];
      tasks.forEach(tasks => {
        if(tasks.isGlobal === true){
          this.teamTaskCount.push(tasks);
        }
        if(tasks.isGlobal === false){
          this.myTaskCount.push(tasks);
        }
      });
     
    })
  }

}
