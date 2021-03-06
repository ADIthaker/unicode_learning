const express = require('express');

const app = express();
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const multer = require('multer');
const authRoutes = require('./routes/auth');
const isAuth = require('./middlewares/isAuth');
const isRide = require('./middlewares/isRide');
const dbConnection = require('./config/db');
const protectedRoutes = require('./routes/protected');
const requestRoutes = require('./routes/request');
const fileUpload = require('./utils/fileUpload');

dbConnection.db();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 10000,
        keys: [process.env.COOKIE_KEY],
    }),
);
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(
    multer({
        storage: fileUpload.storage,
        fileFilter: fileUpload.fileFilter,
    }).single('file'),
);
app.use(passport.initialize());
app.use(passport.session());

require('./config/passportOauthConfig')(passport);

app.use(authRoutes);
app.use(isAuth.isTokenAuth, isAuth.isOAuth, isAuth.setUser, isRide.isRiding);
app.use(protectedRoutes);
app.use(requestRoutes);

app.listen(process.env.PORT, () => {
    console.log(`\nworking on port ${process.env.PORT}`);
});
module.exports = app;