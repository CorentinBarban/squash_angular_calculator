import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatrice';

  operande1 = 0;
  operande2 = 0;
  op = "";
  result = 0;

  plus() {
    this.result = this.operande1 + this.operande2;
  }

  minus() {
    this.result = this.operande1 - this.operande2;
  }
  mult() {
    this.result = this.operande1 * this.operande2;
  };

  div() {
    this.result = this.operande1 / this.operande2;

  };

}
