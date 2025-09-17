export interface QuizData {
	title: string;
	description: string;
	questions: Question[];
	options: AssociativeOption[];
	explanations?: Record<AssociativeOption, string>;
}

export interface ValidQuizData extends QuizData {}

export type AssociativeOption = string;

export interface Question {
	question: string;
	answers: Answer[];
}

export interface Answer {
	association: WeightedOption;
	response: string;
}

export interface WeightedOption {
	option: AssociativeOption;
	weight: number;
}

export type QuizResponse = WeightedOption[];

export type QuizScore = WeightedOption[];
