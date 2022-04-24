import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackOfficePage } from 'src/app/model/page';
import { Product } from 'src/app/model/product';

const baseUrl = 'http://localhost:3000';

@Component({
  selector: 'ac-backoffice',
  templateUrl: './backoffice.component.html',
})
export class BackofficeComponent implements OnInit {

  selection: BackOfficePage = 'product';

  constructor() { }
  ngOnInit(): void { }

}
