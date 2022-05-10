import { Component, Input } from "@angular/core"
import { GamePage } from "src/app/features/games/games.interface"
import { IonicColor } from "src/app/interfaces/ionic.interface"
import { CommonAnswersComponentEvents } from "./answers.events"

@Component({
  selector: "common-answers[page]",
  templateUrl: "./answers.component.html",
  styleUrls: ["./answers.component.scss"],
})
export class CommonAnswersComponent {
  constructor(private events: CommonAnswersComponentEvents) {}

  @Input()
  page?: GamePage<any>

  answer(answerIndex: number) {
    if (this.isAnswered()) {
      return
    }
    this.events.answersSelected$.next({ answerIndex })
  }

  isButtonsDisabled() {
    const isDisabled = this.isAnswered()
    return isDisabled
  }

  getButtonColor(buttonIndex: number): IonicColor {
    const rightIndex = this.page?.rightAnswerIndex
    const selectedIndex = this.page?.selectedAnswerIndex
    const isRightIndex = buttonIndex === rightIndex
    const isWrongIndex = buttonIndex === selectedIndex
    if (this.isAnswered() === false) {
      return ""
    }

    if (isRightIndex) {
      return "success"
    }
    if (isWrongIndex) {
      return "danger"
    }

    return ""
  }

  private isAnswered(): boolean {
    const page = this.page
    if (!page) {
      return false
    }

    return typeof page.selectedAnswerIndex === "number"
  }
}
