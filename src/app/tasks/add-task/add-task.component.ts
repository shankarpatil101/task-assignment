import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskDataService } from '../../task-data.service';
import { taskData } from '../../task-interface.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;
  showFormDialog: boolean = false;
  taskVisable: any[] = [
    {value: 'personal', viewValue: 'Personal'},
    {value: 'global', viewValue: 'Global'},
  ];
  taskCreateds: any[] = [
    {value: 'teamLeader', viewValue: 'Team Leader'},
    {value: 'other', viewValue: 'Other'},
  ];
  taskStatuss: any[] = [
    {value: 'inprogress', viewValue: 'Inprogress'},
    {value: 'completed', viewValue: 'Completed'},
  ];

  constructor(private taskDataService: TaskDataService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      taskname: new FormControl([], Validators.required),
      taskVisibleBy: new FormControl([], Validators.required),
      taskCReatedBy: new FormControl([], Validators.required),
      taskOwner: new FormControl([], Validators.required),
      startDate: new FormControl([], Validators.required),
      endDate: new FormControl([], Validators.required),
      taskStatus: new FormControl([], Validators.required),
    });
  }

  onSubmit() {
    const me = this;
    me.taskDataService.addTask(me.taskForm.value);
  
    if(me.taskForm.value){
      me._snackBar.open('Task added successfully!', 'Undo', {
        duration: 1000
      });
    }
    me.taskForm.reset();
    me.showFormDialog = false;
  }

  onClear() {
    this.taskForm.reset();
  }

  onCancel(){
    const me = this;
    me.showFormDialog = false;
}
  openAddTask(){
    const me = this;
    me.showFormDialog = me.showFormDialog ? false : true;
  }

}
