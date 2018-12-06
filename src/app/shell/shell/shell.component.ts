import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem, MessageService } from 'primeng/api';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

import { Subscription } from 'rxjs';

import { Iteachers } from 'src/app/models/teachers';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {

  items: MenuItem[];
  displaySidebar = false;
  userRoleLabel = this._authService.getRoleLocalizedName();
  logOutLabel = 'Вийти';
  editActiveUserLabel = 'Редагувати';
  userFullName: string;
  activeUser: Iteachers;
  private subscription: Subscription;


  constructor(
    private _authService: AuthenticationService,
    private messageService: MessageService,
    private notificationToasts: DataSharingService,
    private teacherService: TeachersService,
    private router: Router) { }

  ngOnInit() {
    this.subscribeToNotifications();

    // this.items = [
    //   {
    //     label: 'Струтинська Тетяна Олександрівна (Вчитель)',
    //     items: [

    //       { label: 'Меню' },
    //       {
    //         label: 'Вийти', command: (click) => {
    //           this.LogOut();
    //         }, routerLink: ['/login']
    //       }
    //     ]
    //   }
    // ];
  }

  LogOut() {
    this._authService.logOut();
  }

  subscribeToNotifications() {
    this.subscription = this.notificationToasts.showToasts
      .subscribe(notification => this.messageService.add(notification));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  homeButtonClicked() {
    this.router.navigate([this._authService.defaultRoute()]);
  }
  editActiveUser() {
    console.log('User edit btn pressed');
  }
  print() {
    // this._authService.getRole();
    // this.teacherService.getTeacher('31').subscribe(teacher => (this.activeUser = teacher));
    this.teacherService.getTeacherBy('31').subscribe(teacher => (this.activeUser = teacher));
    console.log(this.activeUser);
  }
}
