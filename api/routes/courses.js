var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
// ES6 SYNTAX
const Course = require('../models').Course;
const User = require('../models').User;
const bcryptjs = require('bcryptjs');
const auth = require('basic-auth');
let courses = [];

/* ------------------------------------------------------------
 VALIDATIONS */


const validateTitle = check("title")
.exists({
  checkNull: true,
  checkFalsy: true
})
.withMessage('Please provide a vaue for "Title"');

const validateDescription = check("description")
.exists({
  checkNull: true,
  checkFalsy: true
})
.withMessage('Please provide a vaue for "Description"');

const courseValidations = [validateTitle, validateDescription];
// --------------------------------------------------------------
// Handler function to wrap each route

function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next);
    } catch(error){
      next(error);
    }
  }
}
// -----------------------------------------------------------------
 // Authentication middleware


const authenticateUser = async(req, res, next) => {
  // console.log(res.errors)
  let message = null;
  const credentials = auth(req);
  // console.log(credentials);
  if(credentials){
    const users = await User.findAll();
    const user = await users.find(u => u.emailAddress === credentials.name);
    if(user){
      //  When I try to create a course from postman, bscrpt works fine but from react it does not work!
      // bcryptjs.compareSync( credentials.pass, user.password);
      const authenticated = bcryptjs.compare( credentials.pass, user.password);
      if(authenticated){
        req.currentUser = user;
      } else {
        message = 'Authentication failed';
      }
    } else {
      message = 'User not found';
    }
   } else {
    message = 'Auth header not found';
  }
  if(message) {
    console.warn(message);
    res.status(401).json({ message: 'Access denied' });
  } else {
    next();
  }
};
// ----------------------------------------------------------------------



/*COURSES LIST*/

router.get('/courses', asyncHandler(async(req, res) => {
  const courses = await Course.findAll({
    include: [{
      model: User
    }]
  });
  res.json(courses);
}));


/*GET A COURSE FROM LIST*/

router.get('/courses/:id', asyncHandler( async(req, res) => {
  const courses = await Course.findAll({
    include: [{
      model: User
    }]
  });
  const course = courses.find(course => course.id == req.params.id);
  res.json(course);
}));

// Create Courses

/*
authenticateUser,  <== This goes inside post request, I got rid of it for now to test
*/
router.post('/courses', authenticateUser, courseValidations, asyncHandler(async(req, res) => {
  // const user = req.currentUser;
  // const course = await Course.create(req.body);
  // console.log(req);
  const errors = validationResult(req);
  // console.log(errors.isEmpty());
  if(!errors.isEmpty()){
    const errormessages = errors.array().map(error => error.msg);
    res.status(400).json({ errors: errormessages })
    // console.log(errors);
    
  } else {
    const course = await Course.create(req.body);
    courses.push(course);
    res.status(201).location(`/courses/:${course.id}`).end();
  }
  // console.log(course.id);
  // res.redirect(`/courses/:${course.id}`);
}));

// Update Courses  // WORKS!

router.put('/courses/:id', authenticateUser, courseValidations, asyncHandler( async(req, res) => {
  const course = await Course.findByPk(req.params.id);
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    const errormessages = errors.array().map(error => error.msg);
    res.status(400).json({ errors: errormessages })
    // console.log(errors);  
  } else if(course){
    await course.update({
      title: req.body.title,
      description: req.body.description,
      estimatedTime: req.body.estimatedTime,
      materialsNeeded: req.body.materialsNeeded,
      userId: req.body.userId,
    });
    res.sendStatus(204).end();
  } else {
    res.sendStatus(404).end();
  }
}));

// Delete Courses // WORKS!

router.delete('/courses/:id', authenticateUser, asyncHandler( async(req, res) => {
  const course = await Course.findByPk(req.params.id);
  if(course){
    await course.destroy();
    res.sendStatus(204);
  } else {
    throw error;
  }
}));



module.exports = router;
