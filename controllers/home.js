const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { 
      title: "Bettah",
      session: req.session.user,
      profilePhoto: req.session.profilePhotoPath
    });
  },
};

module.exports = HomeController;
