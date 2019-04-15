import { Directive, OnInit, Input } from '@angular/core';
import { ReadingCreateComponent } from '../reading-create/reading-create.component';
import { Article } from 'src/app/models/article';

@Directive({
  selector: '[applyArticle]'
})
export class ApplyArticleDirective implements OnInit {
  @Input('applyArticle') article:Article
  constructor(private hostRef:ReadingCreateComponent) { }

  ngOnInit(): void {
    this.hostRef.readingForm.patchValue({
      article:this.article
    })

    this.hostRef.readingForm.get('article').disable()
    
  }
}
