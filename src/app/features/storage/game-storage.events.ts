import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class GameStorageEvents {
  configChanged$ = new Subject()
}
