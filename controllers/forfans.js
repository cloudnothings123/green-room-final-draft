//method for opening forfans page
module.exports = {
    getForFansIndex: async (req,res) => {
            res.render('forfans.ejs')
    }
}