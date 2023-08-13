const routes = require("express").Router();

routes.get('/', (req, res) => {res.render('index.ejs')});
routes.get('/contact', (req, res) => {res.render('contact.ejs')});
routes.get('/about', (req, res) => {res.render('about.ejs')});

routes.get('/o-desmatamento-das-araucarias-ao-longo-da-historia', (req, res) => {res.render('posts/post1.ejs')});
routes.get('/conheca-algumas-especies-nativas-do-rs', (req, res) => {res.render('posts/post2.ejs')});
routes.get('/a-vegetacao-dos-pampas', (req, res) => {res.render('posts/post3.ejs')});
routes.get('/a-vegetacao-da-mata-atlantica', (req, res) => {res.render('posts/post4.ejs')});

module.exports = routes;