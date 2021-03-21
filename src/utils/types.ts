export type Festival = {
    id?: number;
    name: string;
    description: string;
    imageUrl: string;
    isCurrent: boolean
}

export type Game = {
    id?:number;
    name: string;
    minNumberPlayer: number;
    maxNumberPlayer: number;
    minYearPlayer: number;
    duration: number;
    isPrototype: boolean;
    type: GameType;
    manual: string;
    imageUrl?: string;
    editor: Company;
}

export type GameType = {
    id?: number;
    label: string
}

export type Company = {
    id?:string;
    name: string;
    mail: string;
    address: string;
    canBeExhibitor: boolean;
}

export type User = {
    id?: number;
    firstname: string;
    lastname: string;
    mail: string;
    password: string;
    isAdmin: boolean;
}

export type Space = {
    id?: number;
    label: string;
    tablePrice: number;
    meterPrice: number;
    tableTotal: number;
}

export type ExhibitorMonitoring = {
    exhibitor : Company;
    festival : Festival;
    status : ExhibitorMonitoringStatus;
    reservation: Reservation;
    dateContact1 : Date;
    dateContact2 : Date;
    dateContact3 : Date;
}

export type ExhibitorMonitoringStatus = {
    id?: number;
    label: string;
    exhibitorMonitorings: ExhibitorMonitoring[]
}

export type Reservation = {
    id?:number;
    needVolunteer: boolean;
    willCome: boolean;
    comment: string;
    mailingDate: Date;
    paymentDate: Date;
    reservationsDetails: ReservationDetails[];
    exhibitorMonitoring: ExhibitorMonitoring;
    gameMonitorings: GameMonitoring[];
}

export type ReservationDetails = {
    reservation : Reservation;
    space: Space;
    tableReserved: number;
    meterReserved: number;
}

export type GameMonitoring = {
    game: Game;
    reservation: Reservation;
    quantityExposed: number;
    quantityTombola: number;
    quantityDonation: number;
    isPlaced: boolean;
    needBeingReturned: boolean;
    returnedPrice: number;
    status: GameMonitoringStatus;
    area: Area
}

export type GameMonitoringStatus = {
    id? : number;
    label: string;
    gameMonitorings: GameMonitoring[]
}

export type Area = {
    id?:number;
    label: string;
}
