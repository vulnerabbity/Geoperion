import { Component } from "@angular/core"
import { GamesPaths } from "./games-routing.module"

@Component({
  templateUrl: "./games.page.html",
  styleUrls: ["./games.page.scss"],
})
export class GamesPage {
  paths = GamesPaths

  constructor() {}
}
