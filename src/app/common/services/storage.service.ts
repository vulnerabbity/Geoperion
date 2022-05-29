import { Injectable, OnInit } from "@angular/core"
import { Storage as IonicStorage } from "@ionic/storage-angular"
import { from, Subject } from "rxjs"

@Injectable({ providedIn: "root" })
export abstract class StorageService<T> {
  protected abstract storageKey: string
  protected abstract defaultValue: T

  private setEmitter$ = new Subject<T>()

  public readonly valueChanged$ = from(this.setEmitter$)

  private ionicStorage = new IonicStorage()

  constructor() {
    // required by library
    this.ionicStorage.create()
  }

  async set(value: T) {
    this.setEmitter$.next(value)

    await this.ionicStorage.set(this.storageKey, value)
  }

  async get(): Promise<T> {
    const result = await this.ionicStorage.get(this.storageKey)
    return result ?? this.defaultValue
  }

  async remove(key: string) {
    await this.ionicStorage.remove(key)
  }
}
