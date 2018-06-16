import { Component } from '@angular/core';

import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private ngNavigatorShareService: NgNavigatorShareService;
  constructor(
    ngNavigatorShareService: NgNavigatorShareService
  ) {
    this.ngNavigatorShareService = ngNavigatorShareService;
  }
  title = 'app';
  share() {
    this.ngNavigatorShareService.share({
      title: 'Web Fundamentals',
      text: 'Check out Web Fundamentals — it rocks!',
      url: 'https://developers.google.com/web'
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}
