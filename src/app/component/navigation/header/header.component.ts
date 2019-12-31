import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('sideBartoggle') sideBartoggle = new EventEmitter<void>();

  @ViewChild('category_menu', {static: false}) category_menu;

  removeAlert: boolean = false;
  isAuth: boolean = false;
  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
    this._authService.User.subscribe(
      user => {
        this.isAuth = !!user;
      }
    )
  }

  sideBarToggle() {
    this.sideBartoggle.emit();
  }

  logout() {
    this._authService.logout().subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/']);
      }
    );
  }

  onHover() {
    // alert("ok");
    this.category_menu.open();
  }

  closeAlert() {
    this.removeAlert = true;
  }

}
