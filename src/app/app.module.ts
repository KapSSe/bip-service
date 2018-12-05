import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { InViewportModule } from 'ng-in-viewport';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ParallaxModule } from 'ngx-parallax';
import { AgmCoreModule } from '@agm/core';

import { DataService } from './services/data.service'; 
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

import { AppComponent } from './app.component';
import { BasicComponent } from './components/base/basic/basic.component';
import { HeaderComponent } from './components/project/header/header.component';
import { CoverComponent } from './components/project/cover/cover.component';
import { AboutComponent } from './components/project/about/about.component';
import { ServicesComponent } from './components/project/services/services.component';
import { BenefitsComponent } from './components/project/benefits/benefits.component';
import { StatisticsComponent } from './components/project/statistics/statistics.component';
import { FaqComponent } from './components/project/faq/faq.component';
import { MapComponent } from './components/project/map/map.component';
import { FooterComponent } from './components/project/footer/footer.component';
import { TabswidgetComponent } from './components/project/tabswidget/tabswidget.component';
import { TabsComponent } from './components/base/tabs/tabs.component';
import { ScrollToTopDirective } from './directives/scroll.directive';
import { FormComponent } from './components/base/form/form.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HeaderComponent,
    SafeHTMLPipe,
    CoverComponent,
    AboutComponent,
    ServicesComponent,
    BenefitsComponent,
    StatisticsComponent,
    FaqComponent,
    MapComponent,
    FooterComponent,
    TabswidgetComponent,
    TabsComponent,
    ScrollToTopDirective,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ParallaxModule,
    InViewportModule,
    DeviceDetectorModule.forRoot(),
    ScrollToModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: environment.googleMap.apiKey}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AngularFireDatabase,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
