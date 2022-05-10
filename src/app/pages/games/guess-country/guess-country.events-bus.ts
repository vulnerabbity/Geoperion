import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class GuessCountryGameEventsBus {
  toPreviousPage$ = new Subject<void>()
  toNextPage$ = new Subject<void>()
}
