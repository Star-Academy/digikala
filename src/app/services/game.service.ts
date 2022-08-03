import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ApiService} from './api.service';
import {Game} from '../models/game.model';
import {API_GAME_SEARCH} from '../utils/api.utils';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public games: Game[] = [];
    public searchPhrase: string = '';

    public constructor(private router: Router, private apiService: ApiService) {
        this.initializeObservers();
    }

    public async search(): Promise<void> {
        if (!this.router.routerState.snapshot.url.startsWith('/search')) {
            await this.router.navigateByUrl('/search');
            return;
        }

        const response = await this.apiService.postRequest<{games: Game[]}>({
            url: API_GAME_SEARCH,
            body: {searchPhrase: this.searchPhrase},
        });

        this.games = response && Array.isArray(response?.games) ? response.games : [];

        console.log(this.games);
    }

    private initializeObservers(): void {
        this.router.events.subscribe(async (value) => {
            if (value instanceof NavigationEnd) {
                if (value.url.startsWith('/search')) await this.search();
            }
        });
    }
}
