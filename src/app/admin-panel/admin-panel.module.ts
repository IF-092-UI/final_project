import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

import { TeachersService } from '../services/teachers.service';
import { StudentsService } from '../services/admin-students.service';
import { AdminSubjectsService } from '../services/admin-subjects.service';
import { AdmingroupsService } from '../services/admingroups.service';

import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StudentsComponent } from './admin-panel/students/students.component';
import { TeachersComponent } from './admin-panel/teachers/teachers.component';
import { GroupsComponent } from './admin-panel/groups/groups.component';
import { SubjectsComponent } from './admin-panel/subjects/subjects.component';
import { AttachTeacherComponent } from './admin-panel/attach-teacher/attach-teacher.component';
import { NewStudingYearComponent } from './admin-panel/new-studing-year/new-studing-year.component';
import { ClassScheduleComponent } from './admin-panel/class-schedule/class-schedule.component';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { NewStudingYearService } from '../services/new-studing-year.service';
import { OverlayPanelModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { HttpAttachTeacherService } from '../services/http-attach-teacher.service';
import { DayComponent } from './admin-panel/class-schedule/day/day.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CorrectScheduleComponent } from './admin-panel/correct-schedule/correct-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MenuModule,
    TableModule,
    ButtonModule,
    FieldsetModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    DropdownModule,
    CalendarModule,
    CardModule,
    FieldsetModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    FileUploadModule,
    InputMaskModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    OverlayPanelModule,
    CheckboxModule,
    ProgressBarModule,
    ToastModule,
    ConfirmDialogModule
  ],

  providers: [
    AdmingroupsService,
    AdminSubjectsService,
    TeachersService,
    StudentsService,
    NewStudingYearService,
    HttpAttachTeacherService,
    ConfirmationService
  ],
  declarations: [
    AdminPanelComponent,
    StudentsComponent,
    TeachersComponent,
    GroupsComponent,
    SubjectsComponent,
    NewStudingYearComponent,
    ClassScheduleComponent,
    AttachTeacherComponent,
    DashboardComponent,
    DayComponent,
    CorrectScheduleComponent
  ]
})
export class AdminPanelModule {}
