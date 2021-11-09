export interface IUserInfo {
    id: string;
    firstname: string;
    lastname: string;
    description: string;
    profileImage: string;
    level: {
        title: string;
        color: string;
        point: number;
        pointMax: number;
        icon: string;
    };
    stats: {
        followers: number;
        followings: number;
        roads: number;
    }
    birthday: Date;
    registerDate: Date;
}
