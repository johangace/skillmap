const router = require('express').Router();
let Skill = require('../models/skill.model');

router.route('/').get((req, res) => {
  Skill.find()
  .then(skills => res.json(skills))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newSkill = new Skill({
username,
description,
duration,
date,
  });

  newSkill.save()
  .then(() => res.json('Skill Added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Skill.findById(req.params.id)
    .then(skill=> res.json(skill))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
  Skill.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Skill deleted. '))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
  Skill.findById(req.params.id)
    .then(skill => {
      skill.username = req.body.username;
      skill.description = req.body.description;
      skill.duration = Number(req.body.duration);
      skill.date = Date.parse(req.body.date);

      skill.save()
        .then(() => res.json('Skill updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router; 
