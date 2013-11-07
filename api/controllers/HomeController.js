var HomeController = {
	index: function(req,res) {
		return res.view({
			description: 'sails-testing'
		});
	}

};
module.exports = HomeController;