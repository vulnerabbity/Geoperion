import { Component, OnDestroy } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { DetailedGameStatisticsGenerator } from "src/app/features/statistics/detailed-statistics"
import { GameStatistics } from "src/app/features/statistics/statistics"

@Component({
  selector: "common-finish-game-modal",
  templateUrl: "./finish-modal.component.html",
  styleUrls: ["./finish-modal.component.scss"],
})
export class CommonGameFinishComponent implements OnDestroy {
  statistics: GameStatistics = GameStatistics.getDefault()

  timeDifference = this.getTimeDifference()

  private timeDifferenceTimer = this.setTimeDifferenceTimer()

  get translation() {
    return LanguageServiceInstance.translation.gamePage.finishModal
  }

  get detailedStatistics() {
    const detailedStatistics = DetailedGameStatisticsGenerator.generate(this.statistics)

    return detailedStatistics
  }

  private updateTimeDifference() {
    this.timeDifference = this.getTimeDifference()
  }

  private getTimeDifference() {
    const currentSeconds = new Date().valueOf()
    const startSeconds = this.statistics.startTime.valueOf()

    const difference = currentSeconds - startSeconds
    return new Date(difference)
  }

  setTimeDifferenceTimer() {
    // update initial value
    setTimeout(() => {
      this.updateTimeDifference()
    }, 200)

    return setInterval(() => {
      this.updateTimeDifference()
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.timeDifferenceTimer)
  }
}
