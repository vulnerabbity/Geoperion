import { Injectable, OnInit } from "@angular/core"
import { Storage } from "@ionic/storage-angular"

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor(private storage: Storage) {}

  async set<T>(key: string, value: T) {
    await this.storage.set(key, value)
  }

  async get<T = any>(key: string) {
    const result = await this.storage.get(key)
    return result as T | null
  }

  async destroy(key: string) {
    await this.storage.remove(key)
  }
}
