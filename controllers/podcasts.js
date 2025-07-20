//method for opening ourband page
module.exports = {
    getPodcastsIndex: async (req,res) => {
            res.render('podcasts.ejs')
    }
}