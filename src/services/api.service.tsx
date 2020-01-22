import axios, { AxiosRequestConfig } from 'axios';
import { EConstants } from '../utils/constants';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class ApiService {

    static _instance: ApiService;

    private constructor() {
        //TODO: Replace this with correct base url
        axios.defaults.baseURL = 'https://api.baseurl.com/api/'
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new ApiService();
        }
        return this._instance;
    }

    get<T>(endPoint: string, params: any, useAuthHeaders = false): Observable<T> {
        const config: AxiosRequestConfig = {
            headers: this._buildHeaders(useAuthHeaders),
            params
        };
        return from(axios.get<T>(endPoint, config))
            .pipe(
                map(d => d.data),
                catchError(this._handleError)
            );
    }

    post<T>(endPoint: string, body: any, useAuthHeaders = false): Observable<T> {
        const config: AxiosRequestConfig = {
            headers: this._buildHeaders(useAuthHeaders)
        };
        return from(axios.post<T>(endPoint, body, config))
            .pipe(
                map(d => d.data),
                catchError(this._handleError)
            );
    }

    put<T>(endPoint: string, body: any, useAuthHeaders = false): Observable<T> {
        const config: AxiosRequestConfig = {
            headers: this._buildHeaders(useAuthHeaders)
        };
        return from(axios.put<T>(endPoint, body, config))
            .pipe(
                map(d => d.data),
                catchError(this._handleError)
            );
    }

    private _buildHeaders(useAuthHeaders: boolean): { [key: string]: string } {
        let headers: any = { contentType: 'application/json' };
        if (useAuthHeaders) {
            headers = {
                ...headers,
                authorization: `Beares ${localStorage.getItem(EConstants.AUTH_TOKEN)}`
            }
        }
        return headers;
    }

    private _handleError(error: any): Observable<never> {
        // TODO: Handle error as per error response from backend
        return throwError(error);
    }
}