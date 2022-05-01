import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { IonicModule } from "@ionic/angular"
import { UniqueCommonComponents } from "./unique/unique.declaration"

const components = [...UniqueCommonComponents]

@NgModule({
  imports: [IonicModule, RouterModule],
  declarations: [...components],
  exports: [...components],
})
export class CommonComponentsModule {}
