import { evaluateQuizScore } from './helpers';
import { QuizData, QuizResponse, ValidQuizData } from './schema';

export class Quiz {
	title: string;
	description: string;
	questions: QuizData['questions'];
	options: QuizData['options'];
	explanations?: QuizData['explanations'];

	constructor(data: ValidQuizData) {
		this.title = data.title;
		this.description = data.description;
		this.questions = data.questions;
		this.options = data.options;
		this.explanations = data.explanations;
	}

	getQuestionResponseSet(questionIndex: number) {
		return questionIndex < this.questions.length
			? this.questions[questionIndex]
			: null;
	}

	length() {
		return this.questions.length;
	}

	evaluateScore(responses: QuizResponse) {
		return evaluateQuizScore(this, responses);
	}

	static evaluateQuizScore = evaluateQuizScore;

	static validateShallow(data: any): data is ValidQuizData {
		if (typeof data !== 'object' || !data) return false;
		if (typeof data.title !== 'string' || data.title.length === 0) return false;
		if (typeof data.description !== 'string' || data.description.length === 0)
			return false;
		if (!Array.isArray(data.questions)) return false;
		if (!Array.isArray(data.options)) return false;
		return true;
	}
}
