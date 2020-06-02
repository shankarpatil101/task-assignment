import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksListComponent } from './home/tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UiMaterialModule } from './material.module';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HomeComponent,
    TasksListComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    HeaderComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
