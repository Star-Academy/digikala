import {Component} from '@angular/core';
import {Breadcrumb} from '../../components/breadcrumbs/models/breadcrumb.model';
import {GameService} from '../../services/game.service';

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

    public constructor(public gameService: GameService) {}

    public sortingClickHandler(): void {}
}
