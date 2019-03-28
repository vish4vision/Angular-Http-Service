import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'http Service';
  users: any;

  constructor(private userService: UsersService) {  }

 ngOnInit() {
  this.userService.getAllUsers().subscribe((data) => {
  this.users = data;
  });
  // this.users = this.userService.getAllUsers();
 }
}
