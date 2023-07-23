//method for opening privacy page
module.exports = {
    getPrivacyIndex: async (req,res) => {
            res.render('privacy.ejs')
    }
}