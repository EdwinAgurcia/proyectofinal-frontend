export interface NewUser {
    email: string;
    emailVerified?: boolean;
    id?: string;
    password: string;
    realm?: string;
    username?: string;
    verificationToken?: string;
  
    [key: string]: any;
  }
