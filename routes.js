'use strict';
/**
 * Created by Macy Gong.
 */
const path = require('path');
const mongodb = require('./models/mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = function (app, passport) {

  //app.set('json spaces', 4);

  app.get('/login', function (req, res) {
    if (req.user) {
      return res.redirect('/');
    } else {
      return res.render(path.join(__dirname + '/public/html', 'login.html'), {
        messages: req.flash('error')[0]
      });
    }
  });

  app.get('/register', function (req, res) {
    res.sendFile('register.html', {
      root: __dirname + '/public/html'
    });
  });

  app.post('/loging/getAccessToken', async function (req, res) {
    let username = req.query.username;
    let password = req.query.password;
    let [authStatu ,user] = await myAuth(username  ,password);
    let statusMessage = {
      "0" : "MongoDB Error" , 
      "1" : "login success" , 
      "2" : "invalid username or password" ,
      "3" : "invalid username or password" ,
      "4" : "the user is not active"
    }
    function authFailure() {
      return res.json({
        "code" : authStatu ,
        "message": statusMessage[authStatu]
      });
    }
    let statusFunc = {
      "0" : authFailure ,
      "1" : () => {
        let token = jwt.sign({name:username} , "MicalaSecretSalt" , {expiresIn: '1d'});
        user.token = token;
        user.save(function (err) {
          if (err) {
            return res.send(err);
          }
          return res.json({
            code : authStatu , 
            message: "驗證成功!" , 
            token : "Bearer " + token ,
            username : username
          });
        });
      } , 
      "2" : authFailure ,
      "3" : authFailure ,
      "4" : authFailure
    }
    return statusFunc[authStatu]();
  });
  /* process the login form */
  app.post('/loging', passport.authenticate('local-login', {
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    session: true
  }), function (res, req) {
    if (res.IsAdmin == "admin") {
      req.redirect('/');
    }
    else {
      req.redirect('/');
    }
  });

  app.get('/checkIsLogin' , async function(req ,res) {
    let islogin = await require('./api/Api_function').isTokenLogin(req ,res);
    res.send(islogin);
  })
  app.get('/logout', async function (req, res) {
    await mongodb.users.findOneAndUpdate({"account" : req.user} , {$set: {token: ""}}).exec();
    req.logout();
    res.redirect('/');
  });

  app.get('/api/profile', function (req, res) {
    if (req.user) {
      return res.send(req.user);
    }
    return res.send(null);
  });

  app.use('/api/dicom', require('api/dicom'));
  app.use('/api/users', require('api/users'));

  //#region fhir
  app.use('/api/fhir/metadata' , require('api/FHIR/metadata'));
  app.use('/api/fhir/Organization' , require('api/FHIR/organization'));
  app.use('/api/fhir/Patient', require('api/FHIR/patient'));
  app.use('/api/fhir/Endpoint', require('api/FHIR/endpoint'));
  app.use('/api/fhir/ImagingStudy', require('api/FHIR/ImagingStudy'));
  //#endregion fhir

  app.use('/dicom-web', require('api/dicom-web'));
  app.use('/dicom-web', require('./api/dicom-web/stow'));
  app.use('/' , require('./api/dicom-xml'));
  //#region WEB
  app.use('/dicom', require('web/dicom'));
  app.use('/', require('web/index'));
  //#endregion
  
  app.route('/:url(api|auth|web)/*').get((req, res) => {
    res.status(404).json({
      status: 404,
      message: "not found"
    });
  });

  app.route('/favicon.ico').get((req, res) => {
    res.send("");
  });
};


async function myAuth(username, password) {
  return new Promise((resolve) => {
    mongodb.users.find({ account: username })
      .exec((err, result) => {
        if (err) {
          resolve([0 , err]); //錯誤
        }
        else {
          if (result.length > 0) {
            if (bcrypt.compareSync(password, result[0].password) && result[0].status == 1) {
              resolve([1 , result[0]]);//帳號密碼正確且開通
            }
            else if (bcrypt.compareSync(password, result[0].password) && result[0].status == 0) {
              resolve([4 , '']); //無開通
            }
            else {
              resolve([2 , '']); //密碼錯誤
            }
          }
          else {
            resolve([3 , '']); //無帳號
          }
        }
      });
  });
}
