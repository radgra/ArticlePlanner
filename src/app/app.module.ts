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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MySnackbarComponent } from './core/my-snackbar/my-snackbar.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { AlertBoxComponent } from './core/alert-box/alert-box.component';
import { AutoFocusDirective } from './articles-page/directives/auto-focus.directive';
import { ArticleFormBaseComponent } from './articles-page/article-form/article-form-base/article-form-base.component';
import { MyDialogComponent } from './core/my-dialog/my-dialog.component';
import { ReadingCreateComponent } from './readings/reading-create/reading-create.component';
import { ApplyArticleDirective } from './readings/directives/apply-article.directive';
import { DeleteModalComponent } from './articles-page/article-detail/delete-modal/delete-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticlesPageComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleFormComponent,
    ArticleCreateComponent,
    ArticleEditComponent,
    MySnackbarComponent,
    AlertBoxComponent,
    AutoFocusDirective,
    ArticleFormBaseComponent,
    MyDialogComponent,
    ReadingCreateComponent,
    ApplyArticleDirective,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //Material
    MaterialModule
  ],
  providers: [
    {
      provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue:{duration:2000,horizontalPosition: 'end'},

    }
  ],
  entryComponents:[
    MySnackbarComponent,
    MyDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
