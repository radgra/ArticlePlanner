import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySnackbarComponent } from './my-snackbar.component';

describe('MySnackbarComponent', () => {
  let component: MySnackbarComponent;
  let fixture: ComponentFixture<MySnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
