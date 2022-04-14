import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product';

const baseUrl = 'http://localhost:3000';

@Component({
  selector: 'ac-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ["./backoffice.component.css"]
})
export class BackofficeComponent implements OnInit {

  selection: 'product' | 'news' | 'hero' = 'hero';


  ngOnInit(): void {
  }
 }