import { Component, Input } from "@angular/core"
import { GameStatistics } from "src/app/features/statistics/statistics"

@Component({
  selector: "statistics-list",
  templateUrl: "./statistics-list.component.html",
  styleUrls: ["./statistics-list.component.scss"],
})
export class StatisticsListComponent {
  @Input()
  statisticsList: GameStatistics[] = []
}
