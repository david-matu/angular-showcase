import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'batian-product',
  templateUrl: './batian-product.component.html',
  styleUrls: ['./batian-product.component.css']
})
export class BatianProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() batianProduct: any;

}
