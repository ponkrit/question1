import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get result as false when value is 1 and type is prime', () => {
    const inputValue = 1;
    component.valueType = component.VALUE_TYPE.IS_PRIME;
    component.calculateByValue(inputValue);

    expect(component.result).toBeFalse();
  });

  it('should get result as true when value is 2 and type is prime', () => {
    const inputValue = 2;
    component.valueType = component.VALUE_TYPE.IS_PRIME;
    component.calculateByValue(inputValue);

    expect(component.result).toBeTrue();
  });

  it('should get result as true when value is 0 and type is fibonacci', () => {
    component.inputValue = 0;
    const valueType = component.VALUE_TYPE.IS_FIBONACCI;
    component.calculateByType(valueType);

    expect(component.result).toBeTrue();
  });

  it('should get result as true when value is 1 and type is fibonacci', () => {
    component.inputValue = 1;
    const valueType = component.VALUE_TYPE.IS_FIBONACCI;
    component.calculateByType(valueType);

    expect(component.result).toBeTrue();
  });

  it('should get result as false when value is 4 and type is fibonacci', () => {
    component.inputValue = 4;
    const valueType = component.VALUE_TYPE.IS_FIBONACCI;
    component.calculateByType(valueType);

    expect(component.result).toBeFalse();
  });
});
