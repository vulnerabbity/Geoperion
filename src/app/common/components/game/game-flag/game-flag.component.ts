import { Component, Input } from "@angular/core"

@Component({
  selector: "common-game-flag[flagUrl]",
  templateUrl: "./game-flag.component.html",
  styleUrls: ["./game-flag.component.scss"],
})
export class CommonGameFlagComponent {
  @Input()
  flagUrl = ""
}
