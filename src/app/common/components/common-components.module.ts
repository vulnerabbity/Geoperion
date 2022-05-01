import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { IonicModule } from "@ionic/angular"
import { CommonCategorizableComponents } from "./categorizable/categorizable.declaration"
import { UniqueCommonComponents } from "./unique/unique.declaration"

const components = [...UniqueCommonComponents, ...CommonCategorizableComponents]

@NgModule({
  imports: [IonicModule, RouterModule],
  declarations: [...components],
  exports: [...components],
})
export class CommonComponentsModule {}
