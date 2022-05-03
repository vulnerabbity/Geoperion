import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { CommonServicesModule } from "./services/services.module"
import { RouterModule } from "@angular/router"
import { CommonComponentsModule } from "./components/common-components.module"
import { FormsModule } from "@angular/forms"

const modules = [
  CommonModule,
  IonicModule,
  CommonServicesModule,
  CommonComponentsModule,
  RouterModule,
  FormsModule,
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class AppCommonModule {}
