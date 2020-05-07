import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {


  productForm = new FormGroup({
    ProductName: new FormControl(''),
    ProductID: new FormControl(''),
    ProductDetail: new FormControl(''),
    Quantity: new FormControl(''),
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor() { }

  

  ngOnInit(): void {
  }

}
