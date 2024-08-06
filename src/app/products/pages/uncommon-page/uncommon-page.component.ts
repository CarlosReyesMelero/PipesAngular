import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Carlos';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient():void {
    this.name = 'Melissa'
    this.gender = 'female'
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Carlos', 'Reyes', 'Araceli', 'Juanma', 'Sergio', 'Pepe'];
  public clientsMap = {
    '=0': 'no quedan clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  public deleteClient(): void {
    this.clients.shift();
  }
}
