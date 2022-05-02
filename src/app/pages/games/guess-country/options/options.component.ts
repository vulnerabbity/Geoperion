import { Component, ViewChild } from "@angular/core"
import { IonPopover } from "@ionic/angular"

@Component({
  selector: "guess-country__options",
  templateUrl: "./options.component.html",
  styleUrls: ["./options.component.scss"],
})
export class GuessCountryOptionsComponent {
  @ViewChild("gameOptions")
  private optionsPopover?: IonPopover

  show($event?: MouseEvent) {
    this.optionsPopover?.present($event)
  }
}
