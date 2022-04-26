import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  filterCategory(category: Category | '') {
    this.searchService.clickedCategory.emit(category);
  }

}
