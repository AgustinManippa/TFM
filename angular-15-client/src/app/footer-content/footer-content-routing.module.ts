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
    path: '', // Ruta raíz
    component: FooterContentComponent, // Componente principal
    children: [ // Rutas hijas
      { path: 'aboutUs', component: AboutUsComponent }, // Ruta para el componente 'AboutUsComponent'
      { path: 'services', component: ServicesComponent }, // Ruta para el componente 'ServicesComponent'
      { path: 'contact', component: ContactComponent }, // Ruta para el componente 'ContactComponent'
      { path: 'blog', component: BlogComponent }, // Ruta para el componente 'BlogComponent'
      { path: 'faqs', component: FAQsComponent }, // Ruta para el componente 'FAQsComponent'
      { path: 'termsconditions', component: TermsConditionsComponent }, // Ruta para el componente 'TermsConditionsComponent'
      { path: 'privacypolicy', component: PrivacyPolicyComponent }, // Ruta para el componente 'PrivacyPolicyComponent'
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importar las rutas definidas en 'routes'
  exports: [RouterModule] // Exportar el módulo de enrutamiento
})
export class FooterRoutingModule { }