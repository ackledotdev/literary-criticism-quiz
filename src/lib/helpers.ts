import { QuizData, QuizResponse, AssociativeOption, QuizScore } from './schema';

export function evaluateQuizScore(quiz: QuizData, responses: QuizResponse) {
	const scoreMap = new Map<AssociativeOption, number>();

	for (const option of quiz.options) scoreMap.set(option, 0);

	for (const response of responses) {
		if (!response) return;

		scoreMap.set(
			response.option,
			(scoreMap.get(response.option) ?? 0) + response.weight
		);
	}

	const score: QuizScore = [];
	for (const [option, weight] of scoreMap) score.push({ option, weight });

	return score.sort((a, b) => b.weight - a.weight);
}
