export interface RawProductSearch {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    address: {
        state_name: string;
    };
}

export interface RawProduct {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    seller_address: {
        state: {
        name: string;
        };
    };
}

export interface MercadoLibreSearchResponse {
    results: RawProductSearch[];
}