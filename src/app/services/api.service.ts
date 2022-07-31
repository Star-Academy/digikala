import {Injectable} from '@angular/core';
import {DEFAULT_POST_REQUEST_INIT} from '../utils/api.utils';
import {SnackbarService} from './snackbar.service';
import {SnackbarTheme} from '../enums/snackbar-theme.enum';
import {ResponseError} from '../models/api/response-error.model';
import {GetRequestOptions, PostRequestOptions, RequestOptions} from '../models/api/request-options.model';
import {SpinnerService} from './spinner.service';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor(private spinnerService: SpinnerService, private snackbarService: SnackbarService) {}

    private static generatePostRequestInit(options: PostRequestOptions): RequestInit {
        return {
            ...DEFAULT_POST_REQUEST_INIT,
            body: JSON.stringify(options.body),
            ...(options.init || {}),
        };
    }

    public async getRequest<T>(options: GetRequestOptions): Promise<T | null> {
        return await this.fetchRequest<T>(options, options.init);
    }

    public async postRequest<T>(options: PostRequestOptions): Promise<T | null> {
        const init = ApiService.generatePostRequestInit(options);
        return await this.fetchRequest<T>(options, init);
    }

    private async fetchRequest<T>(options: RequestOptions, init?: RequestInit): Promise<T | null> {
        return this.spinnerService.wrapAsync(async () => {
            const {url, showError = true} = options;

            const response = await fetch(url, init);
            const data = await response.json();

            if (response.ok) return data as T;

            if (showError)
                this.snackbarService.show({
                    message: (data as ResponseError).message,
                    theme: SnackbarTheme.DANGER,
                });

            return null;
        });
    }
}
