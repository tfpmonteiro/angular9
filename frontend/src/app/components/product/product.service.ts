import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})

export class ProductService {
  baseUrl = "http://localhost:3001/products";

  constructor(
    private _snackBar: MatSnackBar,
    private _http: HttpClient
  ) {}

  showMessage(msg: string): void {
    this._snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(product: Product): Observable<Product> {
    return this._http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product> {
  return this._http.get<Product>(`${this.baseUrl}/{id}`);
  }

  update(product: Product): Observable<Product> {
    return this._http.put<Product>(`${this.baseUrl}/{product.id}`, product);
    }
}
