import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleDetailComponent } from './articles-page/article-detail/article-detail.component';
import { ArticleCreateComponent } from './articles-page/article-create/article-create.component';

const routes: Routes = [
  {path:"",component:ArticlesPageComponent },
  {path:"articles/new",component:ArticleCreateComponent },
  {path:"articles/:id",component:ArticleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
