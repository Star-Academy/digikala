import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {UserLoginData} from '../../models/api/user-login-data.model';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public isInLoginView: boolean = true;
    public user: UserLoginData = {
        username: '',
        password: '',
    };

    public constructor(private router: Router, private authService: AuthService) {}

    public async formSubmitHandler(): Promise<void> {
        const isLoggedIn = await this.authService.login(this.user);
        if (isLoggedIn) await this.router.navigateByUrl('/');
    }
}
