var Pose = require('../models/pose')

function shoesIndex(req, res){
  Shoe.find(function(err, shoes) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(shoes);
  });
}

function shoesCreate( req, res){
  Shoe.create(req.body, function(err,shoe){
    if(err) return res.status(500).json(err);
    return res.status(201).json(shoe)
  })
}

function shoesShow( req, res){
  Shoe.findById(req.params.id, function(err,shoe){
    if(err) return res.status(500).json(err);
    return res.status(200).json(shoe)
  })
}

function shoesUpdate( req, res){
  Shoe.findByIdAndUpdate(req.params.id, req.body, { new:true }, 
    function(err, shoe){
    if(err) return res.status(500).json(err);
    return res.status(200).json(shoe)
  })
}

function shoesDelete( req, res){
  Shoe.findByIdAndRemove(req.params.id, function(err){
    if(err) return res.status(500).json(err);
    return res.status(204).json()
  })
}


module.exports = {
  index:  posesIndex,
  create: posesCreate,
  show:   posesShow,
  delete: posesDelete,
  update: posesUpdate
}