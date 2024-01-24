//method for opening tour page
module.exports = {
    getTourIndex: async (req,res) => {
            res.render('tour.ejs')
    }
}