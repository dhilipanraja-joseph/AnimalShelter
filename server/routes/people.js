const express = require('express');
const router = express.Router();

const Person = require('../models/person');
const Animal = require('../models/animal');


router.route('/')
      .get((req,res)=>{
        Person.find({},(err,people)=>{
          res.status(err ? 400 : 200).send(err || people);
        })
      })
      .post((req,res)=>{
        Person.create(req.body,(err,people)=>{
          res.status(err ? 400 : 200).send(err || people);
        })
      })

router.route('/:id')
      .get((req,res)=>{
        Person.findById(req.params.id,(err,person)=>{
          res.status(err ? 400 : 200).send(err || person);
        })
      })
      .delete((req,res)=>{
        Person.findByIdAndRemove(req.params.id,(err,person)=>{
          if(err || !person){
            res.status(400).send(err || 'Person not found !');
          }else{
            res.send(person.name+' deleted');
          }
        });
      })

module.exports = router;
