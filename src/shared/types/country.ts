export interface ICountry {
    name: {
        common: string;
        official: string;
    },
    currencies: {
        [key: string]: {
            name: string;
        }
    },
    region: string;
    capital: string[];
    area: number;
    maps: {
        googleMaps: string
    }
}