import {Component} from '@angular/core';
import {ExpansionListItem} from '../../models/expansion-list-item.model';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
    public items: ExpansionListItem[] = [
        {title: 'Sony', isEnabled: false},
        {title: 'Xbox', isEnabled: false},
        {title: 'Gerdoo', isEnabled: false},
        {title: 'Asre Bazi', isEnabled: false},
        {title: 'Nintendo', isEnabled: false},
        {title: 'Konami', isEnabled: false},
        {title: 'Microsoft', isEnabled: false},
    ];
}
