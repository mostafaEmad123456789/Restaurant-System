import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
