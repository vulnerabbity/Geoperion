import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class CommonGameComponentsEvents {
  exited$ = new Subject<void>()
  restarted$ = new Subject<void>()
  progressChanged$ = new Subject<{ fractionsOfOne: number }>()
  answerSelected$ = new Subject<{ answerIndex: number }>()
}
