import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/model/news';

@Component({
  selector: 'ac-shop-item-news',
  template: `
      <div class="card round-border">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.description}}</p>
          <a [href]="item.url" target="_blank" class="btn btn-dark round-border">
            <i class="fas fa-external-link-alt"></i>
            Visit
          </a>
        </div>
      </div>
  `,
  styleUrls: ['../../../app.component.css']
})
export class ShopItemNewsComponent implements OnInit {

  @Input() item!: News;

  constructor() { }

  ngOnInit(): void { }

}
