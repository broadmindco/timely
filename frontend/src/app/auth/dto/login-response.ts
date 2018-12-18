export class LoginResponse {
  sessionId: string;
  user: {
    email: string,
    id: string,
    roles: Array<string>
  };
}
