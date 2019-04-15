import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleDetailComponent } from './articles-page/article-detail/article-detail.component';
import { ArticleCreateComponent } from './articles-page/article-create/article-create.component';
import { ArticleEditComponent } from './articles-page/article-edit/article-edit.component';

const routes: Routes = [
  {path:"",component:ArticlesPageComponent },
  {path:"articles/new",component:ArticleCreateComponent },
  {path:"articles/:id",component:ArticleDetailComponent },
  {path:"articles/:id/edit",component:ArticleEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
