import { ValidQuizData } from './schema';

export const StaticQuizData: ValidQuizData = {
	title: 'Schools of Literary Criticism',
	description:
		'Find out which school of literary criticism you align with the most.',
	questions: [
		{
			question: 'What is your favorite kitchen appliance?',
			answers: [
				{
					response: 'Hammer and sicke',
					association: { option: 'Marxist', weight: 1 }
				},
				{
					response: 'Apron',
					association: { option: 'Feminist', weight: 0.5 }
				}
			]
		}
	],
	options: ['Marxist', 'Feminist'],
	explanations: {
		Marxist:
			'You tend to analyze literature through the lens of class struggle, economic power, and social inequalities. You are interested in how literature reflects and influences societal structures.',
		Feminist:
			'You focus on the representation of gender and the experiences of women in literature. You are interested in how literary texts perpetuate or challenge patriarchal norms.'
	}
};
