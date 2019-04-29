import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsArticleTableComponent } from './readings-article-table.component';

describe('ReadingsArticleTableComponent', () => {
  let component: ReadingsArticleTableComponent;
  let fixture: ComponentFixture<ReadingsArticleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingsArticleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsArticleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
