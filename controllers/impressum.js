//method for opening impressum page
module.exports = {
    getImpressumIndex: async (req,res) => {
            res.render('impressum.ejs')
    }
}