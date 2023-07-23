//method for opening ourservices page
module.exports = {
    getOurServicesIndex: async (req,res) => {
            res.render('ourservices.ejs')
    }
}