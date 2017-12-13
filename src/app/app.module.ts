import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProjectsService } from './projects/services/projects.service';
import { MainMenuService } from './main-menu/services/main-menu.service';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { OrderByPipe } from './shared/pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    MainMenuComponent,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProjectsService, MainMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
