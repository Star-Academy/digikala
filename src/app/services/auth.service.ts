import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {User} from '../models/user.model';
import {API_USER_AUTH, API_USER_LOGIN} from '../utils/api.utils';
import {TokenObject} from '../models/api/token-object.model';
import {IdObject} from '../models/api/id-object.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private apiService: ApiService) {}

    public async login(user: User): Promise<boolean> {
        const data = await this.apiService.postRequest<TokenObject>({url: API_USER_LOGIN, body: user});

        if (data?.token) {
            localStorage.setItem('token', data?.token);
        }

        return !!data;
    }

    public async isLoggedIn(): Promise<boolean> {
        const token = localStorage.getItem('token') || '';

        const data = await this.apiService.postRequest<IdObject>({
            url: API_USER_AUTH,
            body: {token},
            showError: false,
        });
        return !!data;
    }
}
