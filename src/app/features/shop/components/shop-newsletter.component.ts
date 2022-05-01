import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { News } from 'src/app/model/news';

const baseUrl = 'http://localhost:3000';

@Component({
  selector: 'ac-shop-newsletter',
  template: `
<div class="bg-dark text-white mt-5">
  <div class="container py-5 text-center">
    <i class="fab fa-shopify fa-4x"></i>

    <h1 class="">Subscribe the newsletter</h1>
    <div class="d-flex justify-content-center mt-2">
      <form #f='ngForm' class="row g-3" (ngSubmit)="send(f.value.email)">
        <div class="col-auto">
          <input type="email" class="form-control form-control-lg" placeholder="Your email address" required
            [pattern]="mailRegex" [ngModel]="subscribed" [readonly]="subscribed" name="email" #emailRef="ngModel"
            [ngClass]="{'is-invalid': emailRef.invalid && f.dirty, 'is-valid': emailRef.valid}">
          <div class="col-auto">
            <button type="submit" class="btn btn-lg btn-primary mb-3"
              [disabled]="f.invalid || subscribed">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
  `,
  styles: [
  ]
})
export class ShopNewsletterComponent implements OnInit {
  subscribed!: string | null;
  mailRegex = /^[\w\d_.]+@[\w\d_]+\.\w+$/;

  constructor(private http: HttpClient,
  public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.subscribed = localStorage.getItem('subscribed');
  }

  send(email: string): void {
    this.http.get<{ response: string }>(`http://localhost:3000/newsletter?email=${email}`)
      .subscribe(res => {
        if (res.response === 'ok') {
          this.subscribed = email;
          this.notificationService.show("Hai sottoscritto questa newsletter!")
          localStorage.setItem('subscribed', email);
        }
      })
  }

}
