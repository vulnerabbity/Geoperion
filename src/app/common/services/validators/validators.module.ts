import { NgModule } from "@angular/core"
import { AlphabetValidatorService } from "./alphabet-validator.service"
import { ColorsValidatorService } from "./colors-validator.service"

@NgModule({
  providers: [AlphabetValidatorService, ColorsValidatorService],
})
export class CommonValidatorsModule {}
