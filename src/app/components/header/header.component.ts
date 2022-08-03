import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public constructor(public authService: AuthService, public gameService: GameService) {}

    public async searchSubmitHandler(): Promise<void> {
        await this.gameService.search();
    }
}
