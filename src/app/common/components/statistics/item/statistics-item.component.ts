import { Component, Input } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { DetailedGameStatisticsGenerator } from "src/app/features/statistics/detailed-statistics"
import { GameStatistics } from "src/app/features/statistics/statistics"
import { GameStatisticsManager } from "src/app/features/statistics/statistics-manager"

@Component({
  selector: "statistics-item",
  templateUrl: "./statistics-item.component.html",
  styleUrls: ["./statistics-item.component.scss"],
})
export class StatisticsItemComponent {
  @Input()
  statistic = GameStatistics.getDefault()

  get translation() {
    return LanguageServiceInstance.translation.statistics
  }

  private get detailedStatistics() {
    return DetailedGameStatisticsGenerator.generate(this.statistic)
  }

  getTimePassed() {
    const secondsPassed = this.detailedStatistics.secondsPassed ?? 0
    const millisecondsPassed = secondsPassed * 1000

    return new Date(millisecondsPassed)
  }

  async delete() {
    await GameStatisticsManager.removeById(this.statistic.id)
  }
}
