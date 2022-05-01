import { NgModule } from "@angular/core"
import { LinksService } from "./links.service"
import { RouterService } from "./router.service"

const services = [RouterService, LinksService]

@NgModule({
  providers: services,
})
export class CommonServicesModule {}
