import { Component } from '@angular/core';
import { PotsSavingMicroComponent } from "../../../low-level-components/pots-saving-micro/pots-saving-micro.component";

@Component({
  selector: 'app-totalservice',
  standalone: true,
  imports: [PotsSavingMicroComponent],
  templateUrl: './totalservice.component.html',
  styleUrl: './totalservice.component.scss',
})
export class TotalserviceComponent {}
