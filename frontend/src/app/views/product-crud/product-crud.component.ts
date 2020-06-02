import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {

  constructor( 
    private _router: Router) {}

  ngOnInit() {}

  navigateToProductCreate(): void {
    this._router.navigate(['/products/create']);
  }
}
