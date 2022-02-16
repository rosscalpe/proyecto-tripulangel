const controller = {
    index: (req,res) => {
        res.render('index')
    },
    bio: (req,res) => {
        res.render('bio')
    },
}
module.exports=controller