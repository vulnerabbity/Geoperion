import { NgModule } from "@angular/core"
import { LinksService } from "./links.service"
import { RouterService } from "./router.service"
import { StorageService } from "./storage.service"
import { CommonValidatorsModule } from "./validators/validators.module"

const services = [RouterService, LinksService, StorageService]

@NgModule({
  imports: [CommonValidatorsModule],
  providers: services,
})
export class CommonServicesModule {}
