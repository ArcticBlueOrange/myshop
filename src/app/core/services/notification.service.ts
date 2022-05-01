import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  message: string | null = null;

  constructor() { }

  show(message: string) {
    this.message = message;
    console.log(this.message)
    setTimeout(() => { this.message = null; }, 3000);
  }

  hide() {
    this.message = null;
  }

}
