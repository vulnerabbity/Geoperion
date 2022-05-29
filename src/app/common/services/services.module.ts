import { NgModule, Provider } from "@angular/core"
import { LinksService } from "./links.service"
import { RouterService } from "./router.service"
import { CommonValidatorsModule } from "./validators/validators.module"

const services: Provider[] = [RouterService, LinksService]

@NgModule({
  imports: [CommonValidatorsModule],
  providers: services,
})
export class CommonServicesModule {}
