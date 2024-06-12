import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator,PageEvent  } from '@angular/material/paginator';
import { MatIconButton } from '@angular/material/button';
import { Level } from '../model/level.model';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  levels: Level[] = [];
  totalLevels = 1000;
  levelsPerPage = 20;
  currentPage = 0;
  pageIndex = 0;

  showFirstLastButtons = true;
  disabled = false;
    @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor() {}

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels() {
    const startIndex = this.currentPage * this.levelsPerPage;
    const endIndex = Math.min(startIndex + this.levelsPerPage, this.totalLevels);

   
    this.levels = [];
    for (let i = startIndex; i < endIndex; i++) {
      const level = new Level(i + 1, 0, i > 1);
      this.levels.push(level);
    }
  }
  

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.loadLevels();
  }
  isNextDisabled(): boolean {
    console.log((this.currentPage + 1) * this.levelsPerPage >= this.totalLevels);

    return (this.currentPage + 1) * this.levelsPerPage >= this.totalLevels;
}

isPreviousDisabled(): boolean {
    return this.currentPage === 0;
}




}
