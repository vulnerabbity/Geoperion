import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { GamesLinksService } from "./games-links.service"

@Injectable({
  providedIn: "root",
})
export class GamesRouterService {
  constructor(private router: Router, private linksService: GamesLinksService) {}

  redirectToGames() {
    const path = this.linksService.getLinkToGames()
    this.redirect(path)
  }

  redirectToGuessCountry() {
    const path = this.linksService.getLinkToGuessCountry()
    this.redirect(path)
  }

  private redirect(path: string) {
    return this.router.navigate([path])
  }
}
