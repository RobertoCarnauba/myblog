import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
import {  RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostWallComponent } from './post-wall/post-wall.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminNewComponent } from './admin-new/admin-new.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { PostreadComponent } from './postread/postread.component';
import { ModalService } from './admin-edit/modal.service';
import { FooterComponent } from './footer/footer.component';
import { StringLimitPipe } from './string-limit.pipe';
import { StriphtmlPipe } from './striphtml.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostWallComponent,
    AdminListComponent,
    AdminNewComponent,
    AdminEditComponent,
    PostreadComponent,
    FooterComponent,
    StringLimitPipe,
    StriphtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
