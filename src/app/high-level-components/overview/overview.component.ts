import { Component } from '@angular/core';
import { ListOfCardsComponent } from '../../features-components/list-of-cards/list-of-cards.component';
import { PTitleComponent } from '../../low-level-components/p-title/p-title.component';
import { BudgetsComponent } from '../budgets/budgets.component';
import { PotsComponent } from '../../features-components/pots/pots.component';
import { TransactionsComponent } from "./../../features-components/transactions/transactions.component";
import { RecurringItemComponent } from "../../features-components/recurring-item/recurring-item.component";
@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    ListOfCardsComponent,
    PTitleComponent,
    BudgetsComponent,
    PotsComponent,
    TransactionsComponent,
    RecurringItemComponent
],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {}
