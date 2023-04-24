import { ICharacterSkills } from './ICharacterSkills';

export interface ICharacter {
	name: string;
	title: string;
	info: string;
	weapon: string;
	nation: string;
	rarity: number;
	affiliation: string;
	vision: string;
	description: string;
	constellations: ICharacterSkills[];
	passiveTalents: ICharacterSkills[];
	skillTalents: ICharacterSkills[];
}
