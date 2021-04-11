export interface PickRequest {
	doors: DoorModel[];
	switches: number;
}

export interface DoorModel {
	content: string;
	amount: number;
	canBeOpenedByMonty: boolean;
}