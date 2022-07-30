import {Component} from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public isChangingView: boolean = false;
    public isInLoginView: boolean = true;

    public async toggleView(): Promise<void> {
        this.isInLoginView = !this.isInLoginView;
    }
}
