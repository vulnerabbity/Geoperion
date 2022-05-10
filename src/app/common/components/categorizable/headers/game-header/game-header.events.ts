import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class GameHeaderEvents {
  exit$ = new Subject<void>()

  restart$ = new Subject<void>()

  progressChanged$ = new Subject<{ fractionsOfOne: number }>()
}
