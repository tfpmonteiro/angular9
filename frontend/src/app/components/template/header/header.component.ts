import { HeaderService } from "./header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private _headerService: HeaderService) {}

  ngOnInit() {}

  get title(): string {
    return this._headerService.headerData.title;
  }

  get icon(): string {
    return this._headerService.headerData.icone;
  }

  get routeUrl(): string {
    return this._headerService.headerData.routeUrl;
  }
}
