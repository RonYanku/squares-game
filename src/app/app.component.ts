import { SquareComponent } from './square/square.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'squares-game';
  squares: string[][] = [];
  rows: number = 3;
  cols: number = 3;

  ngOnInit(): void {
    for (let i=0; i<this.rows; i++) {
      this.squares[i]=[];
      for (let j=0; j<this.cols; j++) {
        this.squares[i][j] = '';
      }
    }
  }
}

