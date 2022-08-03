import {Component} from '@angular/core';
import {Breadcrumb} from '../../components/breadcrumbs/models/breadcrumb.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public breadcrumbs: Breadcrumb[] = [
        {title: 'فروشگاه اینترنتی دیجی‌کالا', url: '/'},
        {title: 'خانه و آشپزخانه', url: '#'},
        {title: 'صوتی و تصویری', url: '#'},
        {title: 'کنسول بازی', url: '#'},
    ];

    public sortingClickHandler(): void {}
}
