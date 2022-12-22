export interface NFT {
    collectionName: string;
    rarity: Rarity;
}

export enum Rarity {
    LEGEND = 0,
    EPIC = 1,
    RARE = 2,
    COMUM = 3,
}

export enum RarityLabel {
    LEGEND = 'LENDÁRIA',
    EPIC = 'ÉPICA',
    RARE = 'RARA',
    COMUM = 'COMUM',
}