import {Component} from '@angular/core';
import {Breadcrumb} from '../../components/breadcrumbs/models/breadcrumb.model';
import {GameService} from '../../services/game.service';
import {Sort} from '../../enums/sort.enum';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public Sort = Sort;

    public breadcrumbs: Breadcrumb[] = [
        {title: 'فروشگاه اینترنتی دیجی‌کالا', url: '/'},
        {title: 'خانه و آشپزخانه', url: '#'},
        {title: 'صوتی و تصویری', url: '#'},
        {title: 'کنسول بازی', url: '#'},
    ];

    public constructor(public gameService: GameService) {}

    public async sortingClickHandler(sort: Sort): Promise<void> {
        await this.gameService.changeSort(sort);
    }

    public async previousPageButtonClickHandler(): Promise<void> {
        await this.gameService.changePage(-1);
    }

    public async nextPageButtonClickHandler(): Promise<void> {
        await this.gameService.changePage(1);
    }
}
