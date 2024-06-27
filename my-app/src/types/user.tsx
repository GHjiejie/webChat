export interface User {
  username: string;
  password: string;
  avatar?: string;
  status?: string;
  friends?: User[];
  friendsRequest?: User[];
  blockedUsers?: User[];
  createdAt?: Date;
  updatedAt?: Date;
}
