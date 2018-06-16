# ng-navigator-share

Lightweight Angular wrapper on Web Share API to share PWA apps, Text, URL.

## Why ng-navigator-share?
This library will save you from checking and writing all the cases for [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share), if ```Navigator.share()``` API is available in your browser or not. So instead of writing all that, you can use this wrapper.

## Demo

Check the ng-navigator-share in action, [click here](https://ng-navigator-share-b75a7.firebaseapp.com/).


## Installation
You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.

#### NPM
```  
npm install --save ng-navigator-share
```
        
#### YARN
```          
yarn add --save ng-navigator-share
```

## Usage
Follow below steps to add multi level list in your project

#### 1. Import ```NgNavigatorShareService``` in your component class

You need to import the ```NgNavigatorShareService``` in your component class, where you want to use it. Then use the ```this.ngNavigatorShareService.share()``` method, which will return Promise as shown below.

```typescript        
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
      title: 'My Awesome app',
      text: 'hey check out my Share button',
      url: 'https://developers.google.com/web'
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  }
}
```  
#### 2. In your Markup
```html        
<u>
  <strong (click)='share()'>share</strong>
</u>
```

## Contribution

I welcome you to fork and add more features into it. If you have any bugs or feature request, please create an issue at [github repository](https://github.com/ShankyTiwari/ng-navigator-share/issues).

## Leicense

MIT
