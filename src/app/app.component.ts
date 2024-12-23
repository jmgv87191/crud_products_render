import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSidenavModule,MatButtonModule, MatDividerModule, MatIconModule, RouterLink,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
}
