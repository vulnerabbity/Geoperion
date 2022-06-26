import { Component, Input } from "@angular/core"
import { GameStatistics } from "src/app/features/statistics/statistics"
import { GameStatisticsGenerator } from "src/app/features/statistics/statistics-generator"

@Component({
  selector: "statistics-item",
  templateUrl: "./statistics-item.component.html",
  styleUrls: ["./statistics-item.component.scss"],
})
export class StatisticsItemComponent {
  @Input()
  statistic = GameStatistics.getDefault()
}
