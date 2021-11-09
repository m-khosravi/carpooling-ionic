export class HamroViewModel {
    title: string;
    description: string;
    gender: number;
    goTime: Date;
    returnTime: Date;
    origin: string;
    destination: string;
    img: string;
    icon: string;
    count: number;
    level: IUserLevel;
  
    features: Array<IIconValue[]>
  }

  export interface IIconValue {
    icon: string;
    value: string;
    color: string;
  }
  export interface IUserLevel {
    icon: string;
    value: string;
    color: string;
  }