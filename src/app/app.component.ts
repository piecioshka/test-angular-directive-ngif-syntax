import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public property = null;

  constructor() {
    this.start();
  }

  public start() {
    this.property = null;

    setTimeout(() => {
      this.property = 'Angular';
    }, 1000);
  }
}
