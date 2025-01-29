import { Component } from '@angular/core';

@Component({
  selector: 'app-template-bind',
  standalone: true,
  imports: [],
  templateUrl: './template-bind.component.html',
  styleUrl: './template-bind.component.scss'
})
export class TemplateBindComponent {
  public name = 'Dener Troquatte'
  public age = 32;

  public sum(val1: number, val2: number){
    return  val1 + val2;
  }
}
 