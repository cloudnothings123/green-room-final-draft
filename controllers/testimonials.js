//method for opening ourservices page
module.exports = {
    getTestimonialsIndex: async (req,res) => {
            res.render('testimonials.ejs')
    }
}