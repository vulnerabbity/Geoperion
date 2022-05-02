import { NgModule } from "@angular/core"
import { LinksService } from "./links.service"
import { RouterService } from "./router.service"
import { StorageService } from "./storage.service"

const services = [RouterService, LinksService, StorageService]

@NgModule({
  providers: services,
})
export class CommonServicesModule {}
