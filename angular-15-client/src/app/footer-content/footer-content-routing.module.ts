import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterContentComponent } from './footer-content.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { FAQsComponent } from './faqs/faqs.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: FooterContentComponent,
    children: [
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'services', component: ServicesComponent},
      { path: 'contact', component: ContactComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'faqs', component: FAQsComponent},
      { path: 'termsconditions', component: TermsConditionsComponent},
      { path: 'privacypolicy', component: PrivacyPolicyComponent },
    //   { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }