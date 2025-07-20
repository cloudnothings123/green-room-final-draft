//connect to express
const express = require('express')
const app = express()
//let flash errors exist
const flash = require('express-flash')
//log every action into the terminal
const logger = require('morgan')
//setting location of routers
const forFansRoutes = require('./routes/forfans')
const getInTouchRoutes = require('./routes/getintouch')
const impressumRoutes = require('./routes/impressum')
const mainRoutes = require('./routes/main')
const ourBandRoutes = require('./routes/ourband')
const ourServicesRoutes = require('./routes/ourservices')
const privacyRoutes = require('./routes/privacy')
const realOurServicesRoutes = require('./routes/realourservices')
const tourRoutes = require('./routes/tour')
const testimonialsRoutes = require('./routes/testimonials')
const podcastsRoutes = require('./routes/podcasts')
const playlistRoutes = require('./routes/playlist')
//recognizing dotenv file
require('dotenv').config({path: './config/.env'})
//setting ejs as the view format
app.set('view engine', 'ejs')
//setting a folder for easy access
app.use(express.static('public'))
//just doing something
app.use(express.urlencoded({ extended: true }))
//telling which route to use when home page is requested
app.use('/', mainRoutes)
app.use('/forfans', forFansRoutes)
app.use('/getintouch', getInTouchRoutes)
app.use('/impressum', impressumRoutes)
app.use('/ourband', ourBandRoutes)
app.use('/ourservices', ourServicesRoutes)
app.use('/privacy', privacyRoutes)
app.use('/realourservices', realOurServicesRoutes)
app.use('/tour', tourRoutes)
app.use('/testimonials', testimonialsRoutes)
app.use('/podcasts', podcastsRoutes)
app.use('/playlist', playlistRoutes)
//connecting to port
app.listen(process.env.PORT, () => console.log('Server running'))