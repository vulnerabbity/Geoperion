import { Component, OnDestroy } from "@angular/core"
import { ModalController } from "@ionic/angular"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { DetailedGameStatisticsGenerator } from "src/app/features/statistics/detailed-statistics"
import { GameStatistics } from "src/app/features/statistics/statistics"
import { GameStatisticsManager } from "src/app/features/statistics/statistics-manager"
import { CommonGameComponentsEvents } from "../game-events"

@Component({
  selector: "common-finish-game-modal",
  templateUrl: "./finish-modal.component.html",
  styleUrls: ["./finish-modal.component.scss"],
})
export class CommonGameFinishComponent implements OnDestroy {
  private statistics: GameStatistics = GameStatistics.getDefault()

  timeDifference = this.getTimeDifference()

  private timeDifferenceTimer = this.setTimeDifferenceTimer()

  get translation() {
    return LanguageServiceInstance.translation.gamePage.finishModal
  }

  get detailedStatistics() {
    const detailedStatistics = DetailedGameStatisticsGenerator.generate(this.statistics)

    return detailedStatistics
  }

  constructor(
    private events: CommonGameComponentsEvents,
    private modalController: ModalController,
  ) {}

  async finishGame() {
    await GameStatisticsManager.finishAndSave(this.statistics)
    this.events.restarted$.next()

    await this.closeModal()
  }

  async closeModal() {
    await this.modalController.dismiss()
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
    })

    return setInterval(() => {
      this.updateTimeDifference()
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.timeDifferenceTimer)
  }
}
