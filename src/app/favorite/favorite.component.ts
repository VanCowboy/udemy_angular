import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavoriteComponent {
  isSelected: boolean;
  title: string;

  onClick() {
    this.isSelected = !this.isSelected;
    //this.onClick.emit({newValue: this.isSelected});
  }
}

export interface FavoriteChangeEventArgs{
  newValue: boolean;
}
