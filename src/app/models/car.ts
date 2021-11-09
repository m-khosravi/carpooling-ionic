import { ColorEnum } from './enums/color.enum';

export interface ICar {
    id: string;
    title: string;
    model: string;
    company: {
        name: string;
        logo: string;
    };
    year: number;
    color: string;
    image: string;
    capacity: number;
    features?: [{
        icon?: string,
        value: string,
        color?: ColorEnum,
        isMain?: boolean,
    }]
}
