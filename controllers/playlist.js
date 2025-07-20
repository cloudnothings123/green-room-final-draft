//method for opening forfans page
module.exports = {
    getPlaylistIndex: async (req,res) => {
            res.render('playlist.ejs')
    }
}