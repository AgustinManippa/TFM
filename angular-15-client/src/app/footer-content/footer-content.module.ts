import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';

import { httpInterceptorProviders } from '../_helpers/http.interceptor';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FooterRoutingModule } from './footer-content-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterContentComponent } from './footer-content.component';
import { BlogComponent } from './blog/blog.component';
import { FAQsComponent } from './faqs/faqs.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ServicesComponent,
    ContactComponent,
    FooterContentComponent,
    BlogComponent,
    FAQsComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterRoutingModule,
  ],

  providers: [httpInterceptorProviders,{ provide: LocationStrategy, useClass: HashLocationStrategy }
],
})
export class FooterModule { }
