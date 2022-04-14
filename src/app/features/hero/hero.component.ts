import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'ac-hero',
  template: `
<!--hero-->
<div class="container">
  <div class="card round-border overflow-hidden mt-3" style="height: 300px">
    <img class="card-img round-border" style="object-fit: cover" [src]="hero?.image" alt="Hero">
    <div class="card-img-overlay mt-5">
      <h1 class="card-title">{{hero?.title}}</h1>
      <h4 class="card-text" [innerHTML]="hero?.description"></h4>
    </div>
  </div>
</div>
  `,
  styleUrls: [`../../app.component.css` ]
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero | null = null;

  constructor() { }
  ngOnInit(): void { }

}
