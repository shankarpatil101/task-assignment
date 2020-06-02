import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TASKS } from './task-data.component';
import { taskData } from './task-interface.component';

@Injectable({ providedIn: 'root' })
export class TaskDataService implements OnInit {
    private taskDuplicet: taskData[] = [];
    taskChanged = new Subject<any[]>();
    constructor() { }

    ngOnInit(){
      
    }

    gettaskData(taskStatus) {
        let taskListArr = [];
        TASKS.forEach(task => {
            if (taskStatus === 'global') {
                if (task.isGlobal === true) {
                    taskListArr.push(task);
                }
            } else if (taskStatus === 'notGlobal') {
                if (task.isGlobal === false) {
                    taskListArr.push(task);
                }
            } else if (taskStatus === 'teamLeader') {
                if (task.isLeader === true) {
                    taskListArr.push(task);
                }
            }
        });
        return taskListArr;
    }

    getAllTask() {
        let allTaskListArr = [];
        TASKS.forEach(task => {
            allTaskListArr.push(task);
        });
        return allTaskListArr;
    }

    addTask(taskObj) {
        let statYear = taskObj.startDate.getFullYear();
        let starMonth = taskObj.startDate.getMonth() + 1;
        let startDay = taskObj.startDate.getDate();
        let startDate = statYear + '-' + starMonth + '-' + startDay;

        let endYear = taskObj.endDate.getFullYear();
        let endMonth = taskObj.endDate.getMonth() + 1;
        let endDay = taskObj.endDate.getDate();
        let endDate = endYear + '-' + endMonth + '-' + endDay;
        let customeObj = {
            text: taskObj.taskname,
            isGlobal: taskObj.taskVisibleBy === 'global' ? true : false,
            isLeader: taskObj.taskCReatedBy === 'teamLeader' ? true : false,
            creator: taskObj.taskOwner,
            isCompleted: taskObj.taskStatus === 'completed' ? true : false,
            start: startDate,
            end: endDate
        }
        TASKS.push(customeObj);
        this.taskChanged.next(TASKS.slice());
    }
}
