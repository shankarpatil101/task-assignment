import { Component, OnInit, Input } from '@angular/core';
import { TaskDataService } from '../../task-data.service';
import { taskData } from '../../task-interface.component';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  @Input() taskStatus: string;
  taskLists: taskData[] = [];
  displayedColumns: string[] = ['no', 'text', 'isGlobal', 'isLeader', 'creator', 'isCompleted', 'start', 'end'];
  dataSource : any;

  constructor(private taskDataService: TaskDataService) {

  }

  ngOnInit(): void {
    this.taskLists = this.taskDataService.gettaskData(this.taskStatus);
    this.dataSource = new MatTableDataSource(this.taskLists);
    
    this.taskDataService.taskChanged.subscribe(tasks => {
     this.taskLists = tasks;
     this.dataSource = new MatTableDataSource(this.taskLists);
   })
  }

}
