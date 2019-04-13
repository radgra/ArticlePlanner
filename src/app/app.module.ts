import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleListComponent } from './articles-page/article-list/article-list.component';

import { ArticleDetailComponent } from './articles-page/article-detail/article-detail.component';
import { ArticleFormComponent } from './articles-page/article-form/article-form.component';
import { ArticleCreateComponent } from './articles-page/article-create/article-create.component';
import { ArticleEditComponent } from './articles-page/article-edit/article-edit.component';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesPageComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleFormComponent,
    ArticleCreateComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Material
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
