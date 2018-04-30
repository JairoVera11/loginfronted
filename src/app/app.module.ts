import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthaGuard } from './autha.guard';
import { UserService } from './user.service'
import { UserComponent } from './user/user.component';
import { VentasComponent } from './ventas/ventas.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './admin/category/category.component';
import { NewcategoryComponent } from './admin/category/newcategory/newcategory.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './admin/products/products.component';
import { NewproductsComponent } from './admin/products/newproducts/newproducts.component';
import { UsersComponent } from './admin/users/users.component';
import { NewComponent } from './admin/users/new/new.component';


const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'admin',    
    component: AdminComponent,

  },
  {
    path: 'ventas',
    component: VentasComponent,
  },
  { path: 'category', component: CategoryComponent },
  { path: 'newcategory', component: NewcategoryComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'newproducts', component: NewproductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'newusers', component: NewComponent },
  
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    LoginFormComponent, 
    CategoryComponent,
    FooterComponent, 
    VentasComponent, 
    AdminComponent, CategoryComponent, NewcategoryComponent, OrdersComponent, ProductsComponent, NewproductsComponent, UsersComponent, NewComponent],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule
  ],
  providers: [UserService, AuthaGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
