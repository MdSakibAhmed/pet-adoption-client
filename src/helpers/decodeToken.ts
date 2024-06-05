import { JwtPayload, jwtDecode } from "jwt-decode";

export interface ExtendedPayload extends JwtPayload {
    email:string,
    userId:string,
    role:string
}
export const decodeToken = (token: string): ExtendedPayload   => {
  return jwtDecode(token);
};
