import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { IonicModule } from "@ionic/angular"
import { CommonGameComponentsModule } from "./game/game-components.module"
import { CommonUniqueComponents } from "./unique/unique.declaration"

const declarations: NgModule["declarations"] = [...CommonUniqueComponents]

@NgModule({
  imports: [IonicModule, RouterModule, CommonModule, CommonGameComponentsModule],
  declarations,
  exports: [CommonGameComponentsModule, ...declarations],
})
export class CommonComponentsModule {}
