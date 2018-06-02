import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExamsApiService } from './exams/exams-api.service';
import { Exam } from './exams/exam.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  examsListSubs: Subscription;
  examList: Exam[];

  constructor(private examsApi: ExamsApiService) {
  }

  ngOnInit() {
    this.examsListSubs = this.examsApi
      .getExams()
      .subscribe(res => {
        this.examList = res;
      },
      console.error
    );
  }

  ngOnDestroy() {
    this.examsListSubs.unsubscribe();
  }
}
