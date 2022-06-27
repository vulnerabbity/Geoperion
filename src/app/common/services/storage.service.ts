import { Injectable } from "@angular/core"
import { Storage as IonicStorage } from "@ionic/storage-angular"
import { BehaviorSubject } from "rxjs"

@Injectable({ providedIn: "root" })
export abstract class StorageService<T> {
  public currentValue$ = new BehaviorSubject<T>(this.getDefault())

  protected abstract storageKey: string
  protected abstract defaultValue: T

  protected currentValue = this.getDefault()

  private ionicStorage = new IonicStorage()

  constructor() {
    // "create()" is required by library
    this.ionicStorage.create().then(() => {
      this.initCurrentValue()
    })
  }

  async set(newValue: T) {
    this.currentValue$.next(newValue)
    this.currentValue = newValue

    await this.ionicStorage.set(this.storageKey, newValue)
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

  async remove() {
    await this.ionicStorage.remove(this.storageKey)
  }

  private async initCurrentValue() {
    const currentValueFromStorage = await this.get()

    this.currentValue = currentValueFromStorage
    this.currentValue$.next(currentValueFromStorage)
  }
}
