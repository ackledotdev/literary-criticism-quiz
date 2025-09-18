import { ValidQuizData } from './schema';

export const StaticQuizData: ValidQuizData = {
	title: 'Schools of Literary Criticism',
	description:
		'Find out which school of literary criticism you align with the most.',
	questions: [
		{
			question: 'What is your favorite food?',
			answers: [
				{
					response: 'Burger',
					association: [{ option: 'Structuralist', weight: 4 }]
				},
				{
					response: 'Deconstructed burger',
					association: [{ option: 'Post-Structuralist', weight: 4 }]
				},
				{
					response: 'Homemade meal',
					association: [{ option: 'Reader Response', weight: 4 }]
				},
				{
					response: 'Community kitchen',
					association: [{ option: 'Marxist', weight: 4 }]
				},
				{
					response: 'Healthy salad',
					association: [{ option: 'Moral Dramatic', weight: 4 }]
				},
				{
					response: 'Candy',
					association: [{ option: 'Psychoanalytic', weight: 2 }]
				}
			]
		},
		{
			question: 'What do you do for fun?',
			answers: [
				{
					response: 'Write close reading essays',
					association: [{ option: 'Formalism', weight: 4 }]
				},
				{
					response: 'Engage in protests',
					association: [{ option: 'Feminist', weight: 4 }]
				},
				{
					response: 'Sleep',
					association: [{ option: 'Psychoanalytic', weight: 4 }]
				},
				{
					response: 'Coding',
					association: [{ option: 'Structuralist', weight: 4 }]
				},
				{
					response: 'Join the flat earth society',
					association: [{ option: 'Post-Structuralist', weight: 4 }]
				},
				{
					response: 'Start a revolution',
					association: [{ option: 'Marxist', weight: 4 }]
				}
			]
		},
		{
			question: 'What do you do in a group project?',
			answers: [
				{
					response: 'Make sure everyone is heard',
					association: [
						{ option: 'Feminist', weight: 4 },
						{ option: 'Marxist', weight: 4 }
					]
				},
				{
					response: 'Prevent group from using AI',
					association: [{ option: 'Formalism', weight: 4 }]
				},
				{
					response: 'Look at other example projects',
					association: [{ option: 'Structuralist', weight: 4 }]
				},
				{
					response: 'Consider rubric and teachers expectation',
					association: [{ option: 'Psychoanalytic', weight: 4 }]
				},
				{
					response: 'Let everyone work with unique intentions',
					association: [{ option: 'Post-Structuralist', weight: 4 }]
				},
				{
					response: 'Students discuss and learn from each other',
					association: [{ option: 'Reader Response', weight: 4 }]
				}
			]
		},
		{
			question: 'What is your Starbucks order?',
			answers: [
				{
					response: 'Black coffee',
					association: [{ option: 'Formalism', weight: 4 }]
				},
				{
					response: 'Double chocolate chip frappuccino',
					association: [{ option: 'Psychoanalytic', weight: 4 }]
				},
				{
					response: 'Matcha',
					association: [{ option: 'Feminist', weight: 4 }]
				},
				{
					response: 'Free water',
					association: [{ option: 'Marxist', weight: 4 }]
				},
				{
					response: 'Grande strawberry refresher',
					association: [{ option: 'Structuralist', weight: 4 }]
				},
				{
					response: 'Medium chai',
					association: [{ option: 'Post-Structuralist', weight: 4 }]
				}
			]
		},
		{
			question: 'What is your favorite kitchen object?',
			answers: [
				{
					response: 'Hammer and sickle',
					association: [
						{ option: 'Structuralist', weight: 1 },
						{ option: 'Marxist', weight: 4 }
					]
				},
				{
					response: 'Spork',
					association: [{ option: 'Reader Response', weight: 4 }]
				},
				{
					response: 'Apron',
					association: [{ option: 'Feminist', weight: 4 }]
				},
				{
					response: 'Recipe',
					association: [
						{ option: 'Formalism', weight: 4 },
						{ option: 'Structuralist', weight: 4 }
					]
				}
			]
		},
		{
			question: 'Who is your favorite Harry Potter character?',
			answers: [
				{
					response: 'Hermione',
					association: [
						{ option: 'Formalism', weight: 4 },
						{ option: 'Feminist', weight: 4 },
						{ option: 'Structuralist', weight: 4 }
					]
				},
				{
					response: 'Luna Lovegood',
					association: [{ option: 'Reader Response', weight: 4 }]
				},
				{
					response: 'Ron Weasley',
					association: [{ option: 'Marxist', weight: 4 }]
				},
				{
					response: 'Gollum',
					association: [{ option: 'Reader Response', weight: 4 }]
				},
				{
					response: 'J.K. Rowling',
					association: [
						{ option: 'Psychoanalytic', weight: 4 },
						{ option: 'Feminist', weight: 2 }
					]
				},
				{
					response: 'Dobby',
					association: [
						{ option: 'Structuralist', weight: 4 },
						{ option: 'Marxist', weight: 4 }
					]
				}
			]
		},
		{
			question: 'Does pineapple belong on pizza?',
			answers: [
				{
					response: 'Yes',
					association: [
						{ option: 'Feminist', weight: 4 },
						{ option: 'Post-Structuralist', weight: 4 },
						{ option: 'Moral Dramatic', weight: 4 }
					]
				},
				{
					response: 'No',
					association: [
						{ option: 'Formalism', weight: 4 },
						{ option: 'Structuralist', weight: 2 },
						{ option: 'Marxist', weight: 4 }
					]
				},
				{
					response: 'Depends',
					association: [{ option: 'Psychoanalytic', weight: 4 }]
				}
			]
		},
		{
			question: 'What is your Dungeons and Dragons class?',
			answers: [
				{
					response: 'Fighter',
					association: [{ option: 'Moral Dramatic', weight: 4 }]
				},
				{
					response: 'Wizard',
					association: [{ option: 'Post-Structuralist', weight: 4 }]
				},
				{
					response: 'Rogue',
					association: [
						{ option: 'Formalism', weight: 2 },
						{ option: 'Psychoanalytic', weight: 3 },
						{ option: 'Structuralist', weight: 2 }
					]
				},
				{
					response: 'Cleric',
					association: [{ option: 'Structuralist', weight: 4 }]
				},
				{
					response: 'Bard',
					association: [
						{ option: 'Formalism', weight: 4 },
						{ option: 'Moral Dramatic', weight: 3 }
					]
				}
			]
		},
		{
			question: 'What is your dream job?',
			answers: [
				{
					response: 'Teacher',
					association: [
						{ option: 'Formalism', weight: 1 },
						{ option: 'Moral Dramatic', weight: 4 }
					]
				},
				{
					response: 'Activist',
					association: [
						{ option: 'Feminist', weight: 4 },
						{ option: 'Marxist', weight: 4 }
					]
				},
				{
					response: 'Therapist',
					association: [{ option: 'Psychoanalytic', weight: 4 }]
				},
				{
					response: 'Volunteer',
					association: [{ option: 'Marxist', weight: 4 }]
				},
				{
					response: 'Lawyer',
					association: [
						{ option: 'Formalism', weight: 4 },
						{ option: 'Structuralist', weight: 4 }
					]
				},
				{
					response: 'Doctor',
					association: [
						{ option: 'Post-Structuralist', weight: 3 },
						{ option: 'Moral Dramatic', weight: 2 }
					]
				},
				{
					response: 'Coder',
					association: [
						{ option: 'Formalism', weight: 3 },
						{ option: 'Structuralist', weight: 3 }
					]
				}
			]
		},
		{
			question: 'If you could have any super power, what would it be?',
			answers: [
				{
					response: 'Telepathy',
					association: [{ option: 'Psychoanalytic', weight: 4 }]
				},
				{
					response: 'Superstrength',
					association: [{ option: 'Feminist', weight: 3 }]
				},
				{
					response: 'Become Robin Hood',
					association: [
						{ option: 'Marxist', weight: 4 },
						{ option: 'Moral Dramatic', weight: 1 }
					]
				},
				{
					response: 'Communicate with animals',
					association: [
						{ option: 'Feminist', weight: 1 },
						{ option: 'Post-Structuralist', weight: 2 },
						{ option: 'Reader Response', weight: 3 }
					]
				}
			]
		}
	],
	options: [
		'Formalism',
		'Psychoanalytic',
		'Feminist',
		'Structuralist',
		'Marxist',
		'Post-Structuralist',
		'Reader Response',
		'Moral Dramatic'
	],
	explanations: {
		Formalism:
			'You believe everything to analyze about a text is in the text itself. There is one interpretation and you like to look at literary devices and how they contribute to meaning. When analzying a text you care about unity, form, and diction. You look recurrences, relationships, and motifs in the text. You dislike external factors and would do well on the AP Close Reading essay! YAY!',
		Psychoanalytic:
			"You care about the subconscious. You are FREUD! BE FREUD! You care about how repressed emotions and how they influence a character or author's decision. The struggle between the repressed and factors that impact what is repressed is emphasized. You are able to understand people through their dreams, revealing subconscious desires. You like complexes a lot, the death complex, electra complex, and oedipus complex. Freud and Jung are your best buddies.",
		Feminist:
			"The bird cage is very important to you. You value seeing all the wires and how sexism is institutional. You wonder when you can be the subject, not the object. You want more women's work to be part of the literary canon and dislike biological essentialism.",
		Structuralist:
			'You study patterns and signs throughout different works and how they contribute to wider context. You look for commonalities in human experience and see the world as binary oppositions. You treat language as a code, made up of signs, signifiers, and signified.',
		Marxist:
			'REVOLUTION! You hate class differences, the bourgeosie, capitalism, and unfair ownership of the means of production. You want a socialist revolution!!!!!!!!!!!',
		'Post-Structuralist':
			'You reject that language has true meaning and value freeplay of ideas. You challenge the binaries of structuralism and believe that there is no single definition of truth. You agree with Deridda and Nietzche that our language cannot convey the truth.',
		'Reader Response':
			'You believe that the reader interprets and brings meaning to a text. The reader brings their context and perspective to reading. You believe in the death of the author in analysis. There is a conflict between the implied and actual reader allowing for new meaning and interpretations of texts.',
		'Moral Dramatic':
			'You believe that text should teach people about ethics and how they should behave. Like Aristotle you believe in dramatic construction and seek for the audience to experience catharsis from a work. '
	}
};
