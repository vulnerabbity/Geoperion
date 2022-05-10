import { Component, Input, OnInit } from "@angular/core"
import { FlagsService } from "src/app/features/flags/flags.service"

@Component({
  selector: "common-game-preview-with-flag",
  templateUrl: "./game-preview-with-flag.component.html",
  styleUrls: ["./game-preview-with-flag.component.scss"],
})
export class GamePreviewWithFlagComponent implements OnInit {
  flagPath: string = ""

  @Input()
  reverseStyle: boolean = false

  constructor(private flagsService: FlagsService) {}

  ngOnInit(): void {
    this.updateFlag()
  }

  private updateFlag() {
    this.flagPath = this.flagsService.getRandomFlag()
  }
}
