import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFormBaseComponent } from './article-form-base.component';

describe('ArticleFormBaseComponent', () => {
  let component: ArticleFormBaseComponent;
  let fixture: ComponentFixture<ArticleFormBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFormBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFormBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
