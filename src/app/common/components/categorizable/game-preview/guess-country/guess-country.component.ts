import { Component, OnInit } from "@angular/core"
import { FlagsService } from "src/app/features/flags/flags.service"

@Component({
  selector: "common-guess-country-game-preview",
  templateUrl: "./guess-country.component.html",
  styleUrls: ["./guess-country.component.scss"],
})
export class GuessCountryGamePreviewComponent implements OnInit {
  flag: string = ""

  constructor(private flagsService: FlagsService) {}

  ngOnInit(): void {
    this.updateFlag()
  }

  private updateFlag() {
    this.flag = this.flagsService.getRandomFlag()
  }
}
