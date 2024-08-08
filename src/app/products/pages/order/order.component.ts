import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public heroes: Hero [] = [
    {
      name: 'SpiderMan',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: false,
      color: Color.green,
    },
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }




}
