'use strict'

const express = require('express');
// const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
}

module.exports = function(app, passport) {
    router.get('/', (req, res) => {
      console.log(req.user, req.session);
        res.render('login', {user: req.user});
    });

    router.get('/signup', (req, res) => {
        res.render('signup', {message: req.flash('signinMessage')});
    })

    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/auth',
        failureFlash: true
    }));

    router.get('/login', (req, res) => {
      console.log(req.user, "user get /login");
        res.render('login', {
            user: req.user,
            message: req.flash('loginMessage')
        });
    });

    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/auth',
        failureFlash: true
    }));

    router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    router.get('/ping', function(req, res) {
        res.status(200).send("pong!");
    });
    return router
}
