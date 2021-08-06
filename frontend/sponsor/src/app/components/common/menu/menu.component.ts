import { Component, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Output() public sidenavToggle = new EventEmitter();

  // userRoles: UserTypeEnum[] = [];
  // currentUserRole: UserTypeEnum;
  // jobSeeker = UserTypeEnum.JOB_SEEKER;
  // recruiter = UserTypeEnum.RECRUITER;
  // admin = UserTypeEnum.ADMIN;
  // superAdmin = UserTypeEnum.SUPER_ADMIN;
  // default = UserTypeEnum.DEFAULT;

  constructor() {
    console.log(this.sidenavToggle);

  }

  // constructor(private loginUser: Login) {
  //   this.currentUserRole = this.default;
  //   this.userRoles = this.loginUser.userType;

  // }

  // ngOnInit(): void {
  //   console.log(this.loginUser);
  //   this.loginUser.loginEventEmitter.subscribe(
  //       b => {
  //         console.log(this.loginUser.userType);
  //         this.userRoles = this.loginUser.userType;
  //         this.currentUserRole = this.loginUser.currentUserType;
  //       }
  //   );
  // }

  onToggleSidenav(): void {
    console.log(this.sidenavToggle);
    this.sidenavToggle.emit();
  }

  // logout(): void {
  //   this.loginUser.logout();
  // }

  // switchUserRole(): void {
  //   if (this.currentUserRole === this.jobSeeker) {
  //     this.currentUserRole = this.recruiter;
  //   }
  //   else if (this.currentUserRole === this.recruiter) {
  //     this.currentUserRole = this.jobSeeker;
  //   }
  // }
}
