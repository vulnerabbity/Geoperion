import { Component, Input, OnDestroy } from "@angular/core"
import { ModalController } from "@ionic/angular"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { GamePage } from "src/app/features/games/games.interface"
import { GameStatistics } from "src/app/features/statistics/statistics"
import { GameStatisticsGenerator } from "src/app/features/statistics/statistics-generator"
import { CommonGameFinishComponent } from "../finish-modal/finish-modal.component"
import { CommonGameComponentsEvents } from "../game-events"
import { CommonGameComponentsState } from "../game-state"

@Component({
  selector: "common-game-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class CommonGamePaginatorComponent implements OnDestroy {
  isNextDisabled = true
  isPrevDisabled = false

  buttonsTranslation = LanguageServiceInstance.translation.ui.buttons

  @Input()
  set pages(newPages: GamePage<any>[]) {
    this._pages = newPages

    GameStatisticsGenerator.updateStatisticsFromPages(this.statistics, newPages)
  }

  get pages() {
    return this._pages
  }

  private _pages: GamePage<any>[] = []

  private statistics = GameStatisticsGenerator.generateFromPages(this._pages)

  private stateSub = this.handleStateChange()

  constructor(
    private events: CommonGameComponentsEvents,
    private state: CommonGameComponentsState,
    private modalController: ModalController,
  ) {}

  onPrevPage() {
    this.events.previousPageSelected$.next()
  }

  onNextPage() {
    this.events.nextPageSelected$.next()
  }

  async openFinishModal() {
    GameStatisticsGenerator.updateStatisticsFromPages(this.statistics, this.pages)

    const modal = await this.modalController.create({
      component: CommonGameFinishComponent,
      componentProps: { statistics: this.statistics },
    })
    await modal.present()
  }

  ngOnDestroy(): void {
    this.stateSub.unsubscribe()
  }

  private handleStateChange() {
    return this.state.pagesState$.subscribe(({ hasNextPage, hasPreviousPage }) => {
      this.isPrevDisabled = hasPreviousPage === false
      this.isNextDisabled = hasNextPage === false
    })
  }
}
