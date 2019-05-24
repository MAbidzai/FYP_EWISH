import { AllProductsListComponent } from './../../all-products-list/all-products-list.component';
import { EventWishListComponent } from './../../event-wish-list/event-wish-list.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CreateEventComponent } from '../../create-event/create-event.component';
import { AllEventsComponent } from '../../all-events/all-events.component';
import { CategoriesComponent } from '../../categories/categories.component';
import { CategoryProuductsComponent } from '../../category-prouducts/category-prouducts.component';
import { AllProductsComponent } from 'app/all-products/all-products.component';
import { AddCategoryComponent } from 'app/add-category/add-category.component';
import { AddProductComponent } from 'app/add-product/add-product.component';
import { AllUsersListComponent } from 'app/all-users-list/all-users-list.component';
import { AllCategoriesComponent } from 'app/all-categories/all-categories.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'createEvent', component: CreateEventComponent },
    { path: 'AllEvents', component: AllEventsComponent },
    { path: 'AllEvents/:id', component: EventWishListComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'categories/:id', component: CategoryProuductsComponent },
    { path: 'AllProducts', component: AllProductsComponent },
    { path: 'addCategory', component: AddCategoryComponent },
    { path: 'addProduct', component: AddProductComponent },
    { path: 'allUserList', component: AllUsersListComponent },
    { path: 'allProductList', component: AllProductsListComponent },
    { path: 'allCategories', component: AllCategoriesComponent }


];
