import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InputAdornmentComponent } from './input-adornment.component'

describe('InputAdornmentComponent', () => {
  let component: InputAdornmentComponent
  let fixture: ComponentFixture<InputAdornmentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAdornmentComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(InputAdornmentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
