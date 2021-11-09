import { IUserInfo } from './IUserInfo';

export class UserInfo implements IUserInfo {
    /**
     *
     */
    constructor() {
        
    }
    stats: { followers: number; followings: number; roads: number; };
    registerDate: Date;
    
    id: string;
    firstname: string;
    lastname: string;
    description: string;
    profileImage: string;
    level: {
        title: string;
        color: string;
        point: number;
        pointMax: number
        icon: string;
    };
    birthday: Date;
}
