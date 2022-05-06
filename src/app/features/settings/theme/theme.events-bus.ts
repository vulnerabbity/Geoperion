import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { AppBackgroundTheme } from "../settings.interface"

@Injectable({
  providedIn: "root",
})
export class AppThemeEventsBus {
  changeBackground$ = new Subject<AppBackgroundTheme>()
}
