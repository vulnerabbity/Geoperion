import { Injectable, OnInit } from "@angular/core"
import { Storage as IonicStorage } from "@ionic/storage-angular"
import { from, Subject } from "rxjs"

@Injectable({ providedIn: "root" })
export abstract class StorageService<T> {
  protected abstract storageKey: string
  protected abstract defaultValue: T

  protected currentValue: T | undefined

  private setEmitter$ = new Subject<T>()

  public readonly valueChanged$ = from(this.setEmitter$)

  private ionicStorage = new IonicStorage()

  constructor() {
    // required by library
    this.ionicStorage.create()
    this.initCurrentValue()
  }

  async set(value: T) {
    this.setEmitter$.next(value)

    await this.ionicStorage.set(this.storageKey, value)
  }

  async get(): Promise<T> {
    const result = await this.ionicStorage.get(this.storageKey)
    return result ?? this.defaultValue
  }

  getDefault(): T {
    return this.defaultValue
  }

  getCurrentValue(): T {
    return this.currentValue ?? this.defaultValue
  }

  async remove(key: string) {
    await this.ionicStorage.remove(key)
  }

  private async initCurrentValue() {
    const currentValueFromStorage = await this.get()

    this.currentValue = currentValueFromStorage
  }
}
