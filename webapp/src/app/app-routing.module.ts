import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './category-form/category-form.component';
const routes: Routes = [
 
  {
    path : "",
    component: AppComponent
  },
  {
    path : "categories",
    component: CategoriesComponent
  },
  {
    path : "categories/add",
    component: CategoryFormComponent
  },
  {
    path : "categories/:id",
    component: CategoryFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
