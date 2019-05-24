import { CategoriesService } from './../shared/services/categories.service';
import { Category } from './../shared/Models/category';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public category: Category[] = [];

  constructor(private categoriesService: CategoriesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoriesService.getCategories()
    .subscribe(data => this.category = data);
  }

  onSelect(item) {
    this.router.navigate([item.category_id], {relativeTo: this.route});
  }

}
