import { Component, Input } from "@angular/core"

@Component({
  selector: "common-game-header__progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"],
})
export class CommonGameHeaderProgressBar {
  @Input()
  progress = 0

  getProgress() {
    return this.progress
  }
}
