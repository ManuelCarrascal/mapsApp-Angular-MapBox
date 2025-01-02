import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  imports: [CounterAloneComponent, SideMenuComponent],
  standalone: true,
  styleUrl: './alone-page.component.scss',
  templateUrl: './alone-page.component.html',
})
export class AlonePageComponent {}
