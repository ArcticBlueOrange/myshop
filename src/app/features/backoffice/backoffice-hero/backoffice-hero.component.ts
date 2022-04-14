import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from 'src/app/model/hero';

const baseUrl = 'http://localhost:3000';

@Component({
  selector: 'ac-backoffice-hero',
  templateUrl: './backoffice-hero.component.html',
  styleUrls: [
    "../../../app.component.css"
  ]
})
export class BackofficeHeroComponent implements OnInit {
  hero: Hero = { image: "", title: "", description: "" };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    this.http.get<Hero>(`${baseUrl}/hero`)
      .subscribe(res => this.hero = res);
  }

  saveHandler(f: NgForm) {
    console.log(f.value);
    this.http.post<Hero>(`${baseUrl}/hero`, f.value)
      .subscribe(res => {
        this.hero = res;
      });
  }

}
