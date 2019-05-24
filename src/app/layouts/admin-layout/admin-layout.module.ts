import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './../../add-product/add-product.component';
import { AddCategoryComponent } from './../../add-category/add-category.component';
import { CreateEventComponent } from './../../create-event/create-event.component';
import { AllEventsComponent } from './../../all-events/all-events.component';
import { EventWishListComponent } from './../../event-wish-list/event-wish-list.component';
import { CategoriesComponent } from './../../categories/categories.component';
import { CategoryProuductsComponent } from './../../category-prouducts/category-prouducts.component';
import { AllProductsComponent } from './../../all-products/all-products.component';
import { AllUsersListComponent } from './../../all-users-list/all-users-list.component';
import { AllProductsListComponent } from './../../all-products-list/all-products-list.component';
import { AllCategoriesComponent } from './../../all-categories/all-categories.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CategoriesService } from './../../shared/services/categories.service';
import { EventsService } from './../../shared/services/events.service';
import { ProductsService } from './../../shared/services/products.service';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    CreateEventComponent,
    AllEventsComponent,
    EventWishListComponent,
    CategoriesComponent,
    CategoryProuductsComponent,
    AllProductsComponent,
    AddProductComponent,
    AddCategoryComponent,
    AllUsersListComponent,
    AllProductsListComponent,
    AllCategoriesComponent
  ],
  providers: [CategoriesService, EventsService, ProductsService],
})

export class AdminLayoutModule { }
