import { Component } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"

@Component({
  selector: "common-finish-game-modal",
  templateUrl: "./finish-modal.component.html",
  styleUrls: ["./finish-modal.component.scss"],
})
export class CommonGameFinishComponent {
  get translation() {
    return LanguageServiceInstance.translation.gamePage.finishModal
  }
}
