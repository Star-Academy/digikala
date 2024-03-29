// export const BASE_URL = 'https://api.bijanprogrammer.com/games';
export const BASE_URL = 'http://localhost:5000/games';

export const API_USER_ONE = BASE_URL + '/user/one';
export const API_USER_AUTH = BASE_URL + '/user/auth';
export const API_USER_LOGIN = BASE_URL + '/user/login';
export const API_USER_REGISTER = BASE_URL + '/user/register';
export const API_USER_ALTER = BASE_URL + '/user/alter';

export const API_GAME_ONE = BASE_URL + '/one';
export const API_GAME_GENRES = BASE_URL + '/genres';
export const API_GAME_PLATFORMS = BASE_URL + '/platforms';
export const API_GAME_UPCOMING = BASE_URL + '/upcoming';
export const API_GAME_SEARCH = BASE_URL + '/search';

export const DEFAULT_POST_REQUEST_INIT: RequestInit = {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
};
