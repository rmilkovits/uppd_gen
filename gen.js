var dd = {
	content: [
		'By default paragraphs are stacked one on top of (or actually - below) another. ',
		'It\'s possible however to split any paragraph (or even the whole document) into columns.\n\n',
		'Here we go with 2 star-sized columns, with justified text and gap set to 20:\n\n',
		{
			alignment: 'justify',
			columns: [
				{
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
				},
				{
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
				}
			]
		},
		'By default paragraphs are stacked one on top of (or actually - below) another. ',
		'It\'s possible however to split any paragraph (or even the whole document) into columns.\n',
		'Here we go with 2 star-sized columns, with justified text and gap set to 20:\n\n'
	],
	styles: {
		header: {
			fontSize: 18,
			bold: true
		},
		bigger: {
			fontSize: 15,
			italics: true
		}
	},
	defaultStyle: {
		columnGap: 20
	}
	
}