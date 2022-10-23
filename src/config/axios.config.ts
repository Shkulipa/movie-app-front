import axios, { AxiosRequestConfig } from 'axios';
import { CONST } from '../interfaces/consts.interfaces';
import { IAuthResponse } from 'src/interfaces/user.interfaces';

const config: AxiosRequestConfig = {
	baseURL: process.env.REACT_APP_API_URL,
	responseType: 'json',
	withCredentials: true
};

export const $apiPublic = axios.create(config);
export const $apiPrivate = axios.create(config);

/**
 * @info
 * refresh token
 */
$apiPrivate.interceptors.request.use(
	config => {
		/**
		 * @info
		 * for every request
		 * where you need to have a token
		 * we attach access token in the header
		 */
		if (config?.headers) {
			const parsedUser = localStorage.getItem(
				CONST.LOCAL_STORAGE_USER
			) as unknown as IAuthResponse;
			config.headers.Authorization = `Bearer ${parsedUser.accessToken}`;
		}
		return config;
	},
	async error => {
		const originalRequest = error.config;

		if (
			error.response.status === 403 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;

			try {
				/**
				 * @info
				 * we can call a $apiPublic because
				 * we set a refresh token in the cookies
				 */
				const user = await $apiPublic.post<IAuthResponse>('/refresh-token', {
					withCredentials: true
				});

				/**
				 * @info
				 * refresh token local
				 */
				localStorage.setItem(CONST.LOCAL_STORAGE_USER, JSON.stringify(user));

				/**
				 * @info
				 * make request again
				 */
				return $apiPrivate.request(originalRequest);
			} catch (err) {
				console.error(err);
			}
		}

		throw error;
	}
);
