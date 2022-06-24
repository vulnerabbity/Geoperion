import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

export class GameStorageEvents {
  static storageChanged$ = new Subject()
}
