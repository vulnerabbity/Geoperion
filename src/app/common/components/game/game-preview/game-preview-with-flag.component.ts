import { Component, Input } from "@angular/core"

@Component({
  selector: "common-game-preview-with-flag[flagPath]",
  templateUrl: "./game-preview-with-flag.component.html",
  styleUrls: ["./game-preview-with-flag.component.scss"],
})
export class GamePreviewWithFlagComponent {
  @Input()
  flagPath: string = ""

  @Input()
  reverseStyle: boolean = false
}
