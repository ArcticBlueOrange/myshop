import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { News } from 'src/app/model/news';

const baseUrl = 'http://localhost:3000';
@Component({
  selector: 'ac-backoffice-news',
  templateUrl: './backoffice-news.component.html',
  styles: [
  ]
})
export class BackofficeNewsComponent implements OnInit {
  items: News[] = [];
  selectedItem: News | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<News[]>(`${baseUrl}/news`).subscribe(res => this.items = res)
  }

  selectItem(news: News | null) {
    if (this.selectedItem === news) {
      this.selectedItem = null;
    } else {
      this.selectedItem = news;
    }
  }

  saveHandler(f: NgForm) {
    console.log(f.value);
    if (this.selectedItem) {
      this.editHandler(f);
    } else {
      this.addHandler(f);
    }
  }
  editHandler(f: NgForm) {
    this.http.patch<News>(`${baseUrl}/news/${this.selectedItem?.id}`, f)
      .subscribe(res => {
        this.items = this.items.map(i => {
          return i.id === this.selectedItem?.id ? res : i;
        })
      })

  }
  addHandler(f: NgForm) {
    this.http.post<News>(`${baseUrl}/news`, f.value)
      .subscribe(res => {
        this.items = [...this.items, res];
        this.selectedItem = null;
        f.reset();
      });
  }
  deleteHandler(f: NgForm) {
    this.http.delete<News>(`${baseUrl}/news/${this.selectedItem?.id}`)
      .subscribe(res => {
        this.items = this.items.filter(i => i.id !== this.selectedItem?.id);
        this.selectedItem = null;
      });
  }

}
