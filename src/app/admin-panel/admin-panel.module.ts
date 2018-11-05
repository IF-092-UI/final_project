import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { TeachersService } from '../services/teachers.service';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StudentsComponent } from './admin-panel/students/students.component';
import { TeachersComponent } from './admin-panel/teachers/teachers.component';
import { GroupsComponent } from './admin-panel/groups/groups.component';
import { SubjectsComponent } from './admin-panel/subjects/subjects.component';
import { AdminSubjectsService } from '../services/admin-subjects.service';


@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MenuModule,
    TableModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers:[AdminSubjectsService,TeachersService],
  declarations: [AdminPanelComponent, StudentsComponent, TeachersComponent, GroupsComponent, SubjectsComponent]
})
export class AdminPanelModule { }
