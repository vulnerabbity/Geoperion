import { Injectable } from "@angular/core"
import { AppPaths } from "src/app/root/routing.interface"

@Injectable()
export class LinksService {
  getHomeLink() {
    return this.getRootLink(AppPaths.home)
  }

  getGamesLink() {
    return this.getRootLink(AppPaths.games)
  }

  private getRootLink(link: string) {
    return `/${link}`
  }
}
