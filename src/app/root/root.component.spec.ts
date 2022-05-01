import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { TestBed, waitForAsync } from "@angular/core/testing"

import { RootComponent } from "./root.component"

describe("AppComponent", () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RootComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  it("should create the app", () => {
    const fixture = TestBed.createComponent(RootComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
  // TODO: add more tests!
})
