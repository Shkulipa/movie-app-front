export interface IAuthResponse {
  accessToken: string;
  id: string;
  email: string;
}

export interface IUser extends Omit<IAuthResponse, "accessToken"> {
  id: string;
  email: string;
}