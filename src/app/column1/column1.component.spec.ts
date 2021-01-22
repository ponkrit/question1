import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { Column1Component } from './column1.component';

describe('Column1Component', () => {
  let component: Column1Component;
  let fixture: ComponentFixture<Column1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Column1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Column1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should assign inputValue to be 2', fakeAsync(() => {
    component.inputValue = '2';
    component.onInputValueChange();
    tick(100);

    expect(component.inputValue).toEqual('2');
  }));

  it('should assign inputValue to be 1', fakeAsync(() => {
    component.inputValue = '-2';
    component.onInputValueChange();
    tick(100);

    expect(component.inputValue).toEqual('1');
  }));

  it('should assign inputValue to be 5', fakeAsync(() => {
    component.inputValue = '5abc';
    component.onInputValueChange();
    tick(100);

    expect(component.inputValue).toEqual('5');
  }));

  it('should assign inputValue to be 1', fakeAsync(() => {
    component.inputValue = 'abc';
    component.onInputValueChange();
    tick(100);

    expect(component.inputValue).toEqual('1');
  }));
});
