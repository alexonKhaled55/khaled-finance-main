import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './features-components/sidebar/sidebar.component';
import { Store } from '@ngrx/store';
import { toggleSidebar } from './actions/sidebar.actions';
import { appState } from './store/app.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal_financial';
  store = inject(Store<appState>);
  isMinimized$ = this.store.select('sidebar')
  minimzeMenu() {
    this.store.dispatch(toggleSidebar())
  }
}
