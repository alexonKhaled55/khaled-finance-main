import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-p-title',
  standalone: true,
  imports: [],
  templateUrl: './p-title.component.html',
  styleUrl: './p-title.component.scss',
})
export class PTitleComponent {
  @Input({required:true}) title?:string ;
}
