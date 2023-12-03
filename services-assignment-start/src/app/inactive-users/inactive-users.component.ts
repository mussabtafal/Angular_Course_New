import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  constructor(private usersService: UsersService) {}
  inactiveUsers: string[] = [];

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
