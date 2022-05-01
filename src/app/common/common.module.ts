import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { CommonServicesModule } from "./services/services.module"

const modules = [CommonModule, IonicModule, CommonServicesModule]

@NgModule({
  imports: modules,
  exports: modules,
})
export class AppCommonModule {}
