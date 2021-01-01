import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  letters: string = '0123456789ABCDEF';
  backgroundColor: string;

  constructor() { }

  ngOnInit(): void {
    this.randomlyChangeBackgroundColor();
  }

  getRandomColor() : string {
    let RNGColor = "#";
    for (var i = 0; i < 6; i++) {
      RNGColor += this.letters[Math.floor(Math.random() * 16)];
    }
    return RNGColor;
  }

  randomlyChangeBackgroundColor() {
    let RNGColor = "#";
    for (var i = 0; i < 6; i++) {
      RNGColor += this.letters[Math.floor(Math.random() * 16)];
    }
    this.backgroundColor = RNGColor;
  }

}
