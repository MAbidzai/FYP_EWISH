import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'app/shared/Models/category';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CategoriesService } from 'app/shared/services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
// public eventModelArray = [];
public categoryList: Category[] = [];

categoryListMatDS: MatTableDataSource<Category>;
displayedColumns = ['category_id', 'title', 'description', 'action'];

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;


constructor(private categoryService: CategoriesService,
  private router: Router,
  private route: ActivatedRoute) { }

ngOnInit() {
  this.getAllEvents();
  // this.eventsService.getEvents()
  //   .subscribe(data => this.eventModelArray = data);
}




getAllEvents() {
  this.categoryService.getCategories().subscribe(allCategories => {
    this.categoryList = allCategories;
    if (this.categoryList) {
      this.categoryListMatDS = new MatTableDataSource<Category>(this.categoryList);
      this.categoryListMatDS.paginator = this.paginator;
      this.categoryListMatDS.sort = this.sort;
    };
  });
}

showEventList(event) {
  this.router.navigate([event.event_id], { relativeTo: this.route });
}


applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.categoryListMatDS.filter = filterValue;
}
}
