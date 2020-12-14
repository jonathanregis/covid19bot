const questions =  [
	{
		'message': "Hi __user__, I’m __botname__. I’m going to ask you some questions. I will use your answers to give you advice about the level of medical care you should seek. But first, if you are experiencing a life-threatening emergency, please call 911 immediately. If you are not experiencing a life-threatening emergency, let’s get started. During the assessment, you can refresh the page if you need to start again.",
		'question': 0
	},
	{
		'message': 'Are you in Ghana right now ?',
		'responseType': 'affirm',
		'options': [{'label': 'Yes', 'value':'yes'}, {'label': 'No', 'value': 'no'}],
		'question': 1
	},
	{
		'message': 'Where in Ghana are you ?',
		'responseType': 'select',
		'options': [
		  {
		    "label": "Ahafo",
		    "value": "Ahafo"
		  },
		  {
		    "label": "Ashanti",
		    "value": "Ashanti"
		  },
		  {
		    "label": "Bono",
		    "value": "Bono"
		  },
		  {
		    "label": "Bono East",
		    "value": "Bono East"
		  },
		  {
		    "label": "Central",
		    "value": "Central"
		  },
		  {
		    "label": "Eastern",
		    "value": "Eastern"
		  },
		  {
		    "label": "Greater Accra",
		    "value": "Greater Accra"
		  },
		  {
		    "label": "Northern",
		    "value": "Northern"
		  },
		  {
		    "label": "North East",
		    "value": "North East"
		  },
		  {
		    "label": "Oti",
		    "value": "Oti"
		  },
		  {
		    "label": "Savannah",
		    "value": "Savannah"
		  },
		  {
		    "label": "Upper East",
		    "value": "Upper East"
		  },
		  {
		    "label": "Upper West",
		    "value": "Upper West"
		  },
		  {
		    "label": "Volta",
		    "value": "Volta"
		  },
		  {
		    "label": "Western",
		    "value": "Western"
		  },
		  {
		    "label": "Western North",
		    "value": "Western North"
		  }
		],
		'question': 2
	},

	{
		'message': "__prev_answer__ ? Great! What is your age ?",
		'question': 3,
		'responseType': 'text'
	},
	{
		'question': 4,
		'message': "What is your gender ?",
		'responseType': 'affirm',
		'options': [{'label':'Male', 'value': 'Male'},{'label': 'Fenale', 'value': 'Female'}, {'label': 'Other', 'value': 'Other'}]
	},
	{
		'question': 5,
		'message': "Are you having any of these symptoms ?<br>"+
		"• Bluish lips or face<br>"+
		"• Severe and constant pain or pressure in the chest<br>"+
		"• Extreme difficulty breathing (such as gasping for air, being unable to talk without catching"+
		"your (their) breath, severe wheezing, nostrils flaring)<br>"+
		"• New disorientation (acting confused)<br>"+
		"• Unconscious or very difficult to wake up<br>"+
		"• Slurred speech or difficulty speaking (new or worsening)<br>"+
		"• New or worsening seizures<br>"+
		"• Signs of low blood pressure (too weak to stand, dizziness, lightheaded, feeling cold, pale,"+
		"clammy skin)<br>"+
		"Dehydration (dry lips and mouth, not urinating much, sunken eyes)",
		'responseType': 'affirm',
		'options': [{'label': 'Yes', 'value': 'yes'}, {'label': 'No', 'value': 'no'}]
	},
	{
		'question': 6,
		'message': "Based on your symptoms, you may need urgent medical care. Please call 911 or go to the nearest emergency department.<br>"+
		"Tell the 911 operator or emergency staff if you have had contact with someone with COVID-19.",
	},
	{
		'question': 7,
		'message': 'Are you feeling sick ?',
		'responseType': 'affirm',
		'options': [{'label': 'Yes', 'value': 'yes'}, {'label': 'No', 'value': 'no'}]
	},

	{
		'question': 8,
		'message': "You do not appear to be sick. Learn more about COVID-19 and what you can do to stay safe at <a href='https://www.ghanahealthservice.org/covid19/'>https://www.ghanahealthservice.org/covid19/</a>."
	},
	{
		'question': 9,
		'message': "You may need medical care. Please visit your nearest hospital.<br>"+
		"Tell the medical staff if you have had contact with someone with COVID-19."
	}

]

export default questions;