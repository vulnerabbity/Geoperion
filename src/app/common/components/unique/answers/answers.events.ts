import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class CommonAnswersComponentEvents {
  answersSelected$ = new Subject<{ answerIndex: number }>()
}
