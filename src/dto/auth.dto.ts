// src/dto/auth.dto.ts
export interface LoginUserDTO {
  id: string;
  first_name: string;
  middle_name?: string;
  last_name?: string;
  gender?: string;
  role_id: string;
  mobile: string;
  email_id: string;
  city: string;
  state: string;
  zip: string;
}

export interface LoginResponseDTO {
  token: string;
  user: LoginUserDTO;
}
