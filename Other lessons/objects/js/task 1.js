	let company = [{
		name : 'Microsoft',
		owner : 'owner1',
		sponsors : [{
				surname : 'Surname1',
				name : 'name1',
				mount : 12000
			},
			{
				surname: 'Surname2',
				name: 'name2',
				mount: 1000
			},
			{
				surname: 'Surname3',
				name: 'name4',
				mount : 5000,			},
		],
		year : 2000,
		price : 200000
	},
	{
			name: 'Microsoft2',
			owner: 'owner2',
			sponsors: [{
					surname: 'Surname4',
					name: 'name5',
					mount: 1200
				},
				{
					surname: 'Surname5',
					name: 'name6',
					mount: 1000
				},
				{
					surname: 'Surname6',
					name: 'name7',
					mount: 1500,
				},
			],
			year: 2007,
			price: 1000
		},
		{
			name: 'Microsoft3',
			owner: 'owner3',
			sponsors: [{
					surname: 'Surname5',
					name: 'name8',
					mount: 10200
				},
				{
					surname: 'Surname6',
					name: 'name9',
					mount: 9000
				},
				{
					surname: 'Surname9',
					name: 'name10',
					mount: 1000,
				},
			],
			year: 2020,
			price: 12000
		},
]
//1) загальну вартість усіх сайтів
const totalPriceWebSites = company.reduce((prevSum, value) => prevSum + value.price, 0)
document.write(totalPriceWebSites)