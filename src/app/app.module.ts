import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemComponent } from './pages/projects/item/item.component';
import { TodoComponent } from './pages/projects/todo/todo.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CalculatorComponent } from './pages/projects/calculator/calculator.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent},
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    TodoComponent,
    HomeComponent,
    NavComponent,
    ProjectsComponent,
    ContactComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
