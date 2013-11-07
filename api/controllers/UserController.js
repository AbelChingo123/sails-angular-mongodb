/*---------------------
	:: User 
	-> controller
---------------------*/
var UserController = {

  index: function (req, res) {
     User.find().done(function(err, users){
     // console.info(users);
    if (err) return res.send(err, 500);
    res.view({
      model: users
    });
  });
  },

	'new': function(req,res) {
		res.view();
	},

  create: function(req,res) {
  	var params = _.extend(req.query || {}, req.params || {}, req.body || {});

  	User.create(params, function userCreated (err, createdUser) {
  		if (err) return res.send(err,500);
  		res.redirect('/user/show/'+ createdUser.id);
  	});
  },

  show: function (req,res) {
  	
  	var id = req.param('id')

  	if (!id) return res.send("No id specified.", 500);


  	User.findOne({_id:id}, function userFound(err, user) {
  		if(err) return res.sender(err,500);
  		if(!user) return res.send("User "+id+" not found", 404);

  		res.view({
  			user:user
  		})
  	});
  },

  edit: function (req,res) {
    var id = req.param('id');
    
    if (!id) return res.send("No id specified.",500);

   User.findOne({_id:id}, function userFound(err, user) {
      if (err) return res.send(err,500);
      if (!user) return res.send("User "+id+" not found.",404);
      res.view({
        user: user
      })
    });
  },

  
  update: function (req,res) {

    var params = _.extend(req.query || {}, req.params || {}, req.body || {});
    var id = params.id;
    
    if (!id) return res.send("No id specified.",500);

    User.update(id, params, function userUpdated(err, updatedUser) {
      if (err) {
        res.redirect('/user/edit');
      }
      if(!updatedUser) {
        res.redirect('/user/edit');
      }
      res.redirect('/user/show/'+id);
    });
  },

	
	destroy: function (req,res) {
		var id = req.param('id');
		if (!id) return res.send("No id specified.",500);

		User.find(id).done(function (err, user) {
			if (err) return res.send(err,500);
			if (!user) return res.send("No user with that idid exists.",404);

			User.destroy(id, function userDestroyed(err) {
				if (err) return res.send(err,500);
				return res.redirect('/user');
			});
			
		})
	},
  login: function(req,res) {
    var user = User.find({
      email: req.param('email'),
     // password: req.param('password'),
    }).done(function(err,user){
      var err_msg = "Invalid username or password";
      if(err) {
        return res.json({ error: err.message },500);
      }
      return res.json({ authorized: true, user: user });
    });
  },

  logout: function(req,res) {
      return res.json({ authorized: false });
  }


};
module.exports = UserController;