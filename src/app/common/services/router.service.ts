import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { AppPaths } from "src/app/root/routing.interface"

@Injectable()
export class RouterService {
  constructor(private router: Router) {}

  redirectHome() {
    this.redirect(AppPaths.home)
  }

  redirectGames() {
    this.redirect(AppPaths.games)
  }

  private redirect(path: string) {
    this.router.navigate([path])
  }
}
