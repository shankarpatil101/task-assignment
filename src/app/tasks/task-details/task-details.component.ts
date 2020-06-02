import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskDataService } from '../../task-data.service';
import { taskData } from '../../task-interface.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  allTaskData: taskData[];
  displayedColumns: string[] = ['no', 'text', 'isGlobal', 'isLeader', 'creator', 'isCompleted', 'start', 'end'];
  dataSource : any;
  isLoading: boolean = false;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private taskDataService : TaskDataService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.allTaskData = this.taskDataService.getAllTask();
    this.dataSource = new MatTableDataSource(this.allTaskData);
    this.dataSource.sort = this.sort;
    if(this.allTaskData){
      this.isLoading = false;
    }

     this.taskDataService.taskChanged.subscribe(tasks => {
      this.allTaskData = tasks;
      this.dataSource = new MatTableDataSource(this.allTaskData);
      this.dataSource.sort = this.sort;
    })

   
   
  }

}
