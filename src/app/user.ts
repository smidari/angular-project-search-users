export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface UserApi {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface UserForLogin {
  email: string;
  password: number | string;
}

export interface ApiAuthResponse {
  token: string;
}
