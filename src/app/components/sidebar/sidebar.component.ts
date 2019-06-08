import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

// export const ROUTES: RouteInfo[] = [
//     { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
//     { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
//     { path: '/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
//     // { path: '/typography', title: 'Typography',  icon: 'library_books', class: '' },
//     // { path: '/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
//     // { path: '/maps', title: 'Maps',  icon: 'location_on', class: '' },
//     { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
//     { path: '/createEvent', title: 'Create Event',  icon: 'add_circle_outline', class: '' },
//     { path: '/AllEvents', title: 'All Events',  icon: 'all_out', class: '' },
//     { path: '/categories', title: 'Categories',  icon: 'apps', class: '' },
//     { path: '/AllProducts', title: 'All Products',  icon: 'format_list_bulleted', class: '' },
//     { path: '/addCategory', title: 'Add Category',  icon: 'add_circle_outline', class: '' },
//     { path: '/addProduct', title: 'Add Product',  icon: 'add_circle_outline', class: '' },
//     { path: '/allUserList', title: 'User List',  icon: 'recent_actors', class: '' },
//     { path: '/allProductList', title: 'Products List',  icon: 'format_list_bulleted', class: '' },
//     { path: '/allCategories', title: 'Categories List',  icon: 'apps', class: '' }

// ];

export const ROUTES1: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/addCategory', title: 'Add Category',  icon: 'add_circle_outline', class: '' },
  { path: '/addProduct', title: 'Add Product',  icon: 'add_circle_outline', class: '' },
  { path: '/allUserList', title: 'User List',  icon: 'recent_actors', class: '' },
  { path: '/allProductList', title: 'Products List',  icon: 'format_list_bulleted', class: '' },
  { path: '/allCategories', title: 'Categories List',  icon: 'apps', class: '' },
  { path: '/AllEvents', title: 'All Events',  icon: 'all_out', class: '' }
];


export const ROUTES2: RouteInfo[] = [
  { path: '/createEvent', title: 'Create Event',  icon: 'add_circle_outline', class: '' },
  { path: '/AllEvents', title: 'All Events',  icon: 'all_out', class: '' },
  { path: '/categories', title: 'Categories',  icon: 'apps', class: '' },
  { path: '/AllProducts', title: 'All Products',  icon: 'format_list_bulleted', class: '' },

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  userProfile = 1;

  constructor() { }

  ngOnInit() {
    if (this.userProfile === 0) {
      this.menuItems = ROUTES1.filter(menuItem => menuItem);
    }

    if (this.userProfile === 1) {
      this.menuItems = ROUTES2.filter(menuItem => menuItem);
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
