import { Component, OnDestroy } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { GameStatistics } from "src/app/features/statistics/statistics"
import { GameStatisticsManager } from "src/app/features/statistics/statistics-manager"

@Component({
  templateUrl: "./statistics.page.html",
  styleUrls: ["./statistics.page.scss"],
})
export class StatisticsPage implements OnDestroy {
  get translation() {
    return LanguageServiceInstance.translation.statisticsPage
  }

  statisticsList: GameStatistics[] = []

  statisticsSub = this.subscribeToStatistics()

  constructor() {}

  private subscribeToStatistics() {
    return GameStatisticsManager.currentStatistics$.subscribe(newStatistics => {
      this.statisticsList = newStatistics
    })
  }

  ngOnDestroy(): void {
    this.statisticsSub.unsubscribe()
  }
}
