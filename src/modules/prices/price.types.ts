// src/modules/prices/pricetypes.ts

export interface HourlyPrice {
    DKK_per_kWh: number;
    EUR_per_kWh: number;
    EXR: number;
    time_start: string;
    time_end: string;
}

export type PriceRegion = 'DK1' | 'DK2';