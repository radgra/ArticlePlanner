import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingCreateComponent } from './reading-create.component';

describe('ReadingCreateComponent', () => {
  let component: ReadingCreateComponent;
  let fixture: ComponentFixture<ReadingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
