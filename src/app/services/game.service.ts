import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ApiService} from './api.service';
import {Game} from '../models/game.model';
import {API_GAME_SEARCH} from '../utils/api.utils';
import {Sort} from '../enums/sort.enum';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public readonly PAGE_SIZE: number = 5;

    public games: Game[] = [];
    public searchPhrase: string = '';
    public offset: number = 0;
    public sort: Sort = Sort.TOP_SELLER;

    public constructor(private router: Router, private apiService: ApiService) {
        this.initializeObservers();
    }

    public async changeSort(sort: Sort): Promise<void> {
        this.offset = 0;
        this.sort = sort;
        await this.search();
    }

    public async changePage(multiplier: number): Promise<void> {
        this.offset += multiplier * this.PAGE_SIZE;
        if (this.offset < 0) this.offset = 0;

        await this.search();
    }

    public async search(): Promise<void> {
        const response = await this.apiService.postRequest<{games: Game[]}>({
            url: API_GAME_SEARCH,
            body: {searchPhrase: this.searchPhrase, pageSize: this.PAGE_SIZE, offset: this.offset, sort: this.sort},
        });

        this.games = response && Array.isArray(response?.games) ? response.games : [];

        console.log(this.games);
    }

    public async navigate(): Promise<void> {
        this.offset = 0;

        if (!this.router.routerState.snapshot.url.startsWith('/search')) {
            await this.router.navigateByUrl('/search');
            return;
        }

        await this.search();
    }

    private initializeObservers(): void {
        this.router.events.subscribe(async (value) => {
            if (value instanceof NavigationEnd) {
                if (value.url.startsWith('/search')) await this.search();
            }
        });
    }
}
