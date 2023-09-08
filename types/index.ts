import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	textStyles?: string;
	rightIcon?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: "button" | "submit";
	isDisabled?: boolean;
}

export interface CustomFilterProps {
	title: string;
	options: OptionProps[];
}

export interface OptionProps {
	title: string;
	value: string;
}

export interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export interface CarCardProps {
	car: CarProps;
}

export interface CarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: CarProps;
}

export interface FilterProps {
	manufacturer?: string;
	model?: string;
	year?: number;
	fuel?: string;
	limit: number;
}

export interface ShowMoreProps {
	pageNumber: number;
	isNext: boolean;
}
