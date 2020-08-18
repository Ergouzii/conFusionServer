const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const authenticate = require('../authenticate');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, (req, res, next) => {
    res.end('Will send all the promotions to you!');
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.end(
      'Will add the promotion: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.end('Deleting all promotions');
  });

promoRouter
  .route('/:promoId')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, (req, res, next) => {
    res.end(
      'Will send details of the promotion: ' + req.params.promoId + ' to you!'
    );
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end(
      'POST operation not supported on /promotions/' + req.params.promoId
    );
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end(
      'Will update the promotion: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
  });

module.exports = promoRouter;
