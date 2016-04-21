import {Component} from 'angular2/core';

/*
  Generated class for the <%= jsClassName %> component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: '<%= fileName %>',
  templateUrl: 'build/<%= directory %>/<%= fileName %>/<%= fileName %>.html'
})
export class <%= jsClassName %> {
  constructor() {
    this.text = 'Hello World';
  }
}
