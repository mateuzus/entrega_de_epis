import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometricCrudComponent } from './biometric-crud.component';

describe('BiometricCrudComponent', () => {
  let component: BiometricCrudComponent;
  let fixture: ComponentFixture<BiometricCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiometricCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiometricCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
