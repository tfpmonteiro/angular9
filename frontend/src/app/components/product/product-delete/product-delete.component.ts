import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._productService
      .readById(+this._route.snapshot.paramMap.get("id"))
      .subscribe((product) => {
        this.product = product;
      });
  }

  cancel() {
    this._router.navigateByUrl("/products");
  }

  deleteProduct() {
    this._productService.delete(this.product.id).subscribe(() => {
      this._productService.showMessage('Produto excluído com sucesso');
      this._router.navigateByUrl("/products");
    });
  }
}