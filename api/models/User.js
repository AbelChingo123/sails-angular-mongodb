/*---------------------
	:: User
	-> model
---------------------*/
module.exports = {

	attributes	: {
		_id:'INTEGER',		
		name: {
			type: 'STRING',
			max: 150,
      		required: true
		},
		email: {
			type: 'STRING',
			required: true
		},
		createdAt:'INTEGER',
		updatedAt:'INTEGER',
	}

};