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
    public cachedIsLoggedIn: boolean | null = null;
    public cachedUserId: number | null = null;

    public constructor(private apiService: ApiService) {}

    private static get token(): string {
        return localStorage.getItem('token') || '';
    }

    public async isLoggedIn(): Promise<boolean> {
        if (this.cachedIsLoggedIn !== null) return this.cachedIsLoggedIn;
        return await this.auth();
    }

    public async login(user: User): Promise<boolean> {
        const response = await this.apiService.postRequest<TokenObject>({url: API_USER_LOGIN, body: user});
        if (!response) return false;

        await this.saveCache(response.token, true, response.id);
        return !!response;
    }

    private async auth(): Promise<boolean> {
        const response = await this.apiService.postRequest<IdObject>({
            url: API_USER_AUTH,
            body: {token: AuthService.token},
            showError: false,
        });

        await this.saveCache(AuthService.token, !!response, response?.id ?? null);
        return !!response;
    }

    private async saveCache(token: string | null, isLoggedIn: boolean, userId: number | null): Promise<void> {
        if (!!token) localStorage.setItem('token', token);
        else localStorage.removeItem('token');

        this.cachedIsLoggedIn = isLoggedIn;
        this.cachedUserId = userId;
    }
}
