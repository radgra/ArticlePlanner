import { Component, OnInit, Input } from '@angular/core';
import { ReadingService } from 'src/app/services/reading.service';
import { MatTableDataSource } from '@angular/material';
import { Reading } from 'src/app/models/reading';

@Component({
  selector: 'app-readings-article-table',
  templateUrl: './readings-article-table.component.html',
  styleUrls: ['./readings-article-table.component.css']
})
export class ReadingsArticleTableComponent implements OnInit {
  displayedColumns = ['date','time','comprehension','notes']
  @Input() articleId:string
  dataSource:MatTableDataSource<Reading>
  constructor(private readingService:ReadingService) { }

  ngOnInit() {
    this.readingService.getReadingForArticle(this.articleId).subscribe((readings:Reading[]) => {
      console.log(readings)
      this.dataSource = new MatTableDataSource(readings)
    })
  }

}
