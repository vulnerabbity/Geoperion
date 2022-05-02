import { Component, Input } from "@angular/core"
import { IonicColor } from "src/app/interfaces/ionic.interface"
import { GuessCountryGameEventsBus } from "../guess-country.events-bus"
import { GuessCountrySelectablePage } from "../guess-country.interface"

@Component({
  selector: "guess-country__answers[page]",
  templateUrl: "./answers.component.html",
  styleUrls: ["./answers.component.scss"],
})
export class GuessCountryAnswersComponent {
  constructor(private eventsBuss: GuessCountryGameEventsBus) {}

  @Input()
  page?: GuessCountrySelectablePage

  answer(answerIndex: number) {
    if (this.isAnswered()) {
      return
    }
    this.eventsBuss.selectAnswer$.next(answerIndex)
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

  private isRightAnswer(): boolean {
    const page = this.page
    if (!page) {
      return false
    }

    return page.rightAnswerIndex === page.selectedAnswerIndex
  }

  private isAnswered(): boolean {
    const page = this.page
    if (!page) {
      return false
    }

    return typeof page.selectedAnswerIndex === "number"
  }
}
