import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { GuessCountrySelectablePage } from "./guess-country.interface"

@Injectable({
  providedIn: "root",
})
export class GuessCountryState {
  pages$ = new BehaviorSubject<GuessCountrySelectablePage[]>([])
  currentPageIndex$ = new BehaviorSubject(0)
}
