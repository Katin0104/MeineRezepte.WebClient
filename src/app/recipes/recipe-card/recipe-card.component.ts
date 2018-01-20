import { Component, OnInit, Input } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public portions: number;

  @Input()
  public totalTime: number;

  @Input()
  public workingTime: number;

  @Input()
  public favorite: boolean;

  @Input()
  public imageURL: string;


  constructor() {
    this.name = 'test';
    this.imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wyLhE8egU2e0-xcm4GK21A4dKVGTz9VoDAyhvVRcF8UmWSZl_Q';
  }

  ngOnInit() {
  }

}
