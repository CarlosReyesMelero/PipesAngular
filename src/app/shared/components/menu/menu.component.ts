import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
                // url: 'http://localhost:4200/'
              },
              {
                label: 'Numeros',
                icon: 'pi pi-dollar',
                // url: 'http://localhost:4200/numbers',
                routerLink: 'numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'uncommon',
                // url: 'http://localhost:4200/uncommon'
              },
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Custom pipes',
                icon: 'pi pi-cog',
                routerLink: 'custom',
              }
            ]
          }

        ];
    }
}
