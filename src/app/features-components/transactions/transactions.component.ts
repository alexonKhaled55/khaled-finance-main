import { Component } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";
import { TranscationComponent } from "../../low-level-components/transcation/transcation.component";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CardItemComponent, TranscationComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
