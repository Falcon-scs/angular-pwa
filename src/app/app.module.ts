import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AppMaterialModule } from './app-material.module';

// services
import { AuthService } from './services/auth/auth.service';
import { MainService } from './services/main/main.service';
import { ContentService } from './services/content/content.service';
import { ChangeService } from './services/change/change.service';
import { MessageService } from './services/message/message.service';
import { TimelineService } from './services/timeline/timeline.service';
import { ApproveService } from './services/approve/approve.service';
//components
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DrawerComponent } from './shared/drawer/drawer.component';
import { PreviewComponent } from './pages/preview/preview.component';

export function configProviderFactory(provider: MainService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DrawerComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthService,
    MainService,
    ContentService,
    ChangeService,
    ApproveService,
    MessageService,
    TimelineService,
    { provide: APP_INITIALIZER, useFactory: configProviderFactory, deps: [MainService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
