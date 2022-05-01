import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'ac-notification',
  templateUrl: './notification.component.html',
  styles: [
  ]
})
export class NotificationComponent implements OnInit {

  constructor(public notificationService: NotificationService) {

  }

  ngOnInit(): void {
  }

}
