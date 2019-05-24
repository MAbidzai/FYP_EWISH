import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category-prouducts',
  templateUrl: './category-prouducts.component.html',
  styleUrls: ['./category-prouducts.component.scss']
})
export class CategoryProuductsComponent implements OnInit {

  public categoryId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    // const id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.categoryId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.categoryId = id;
    })
  }

}
