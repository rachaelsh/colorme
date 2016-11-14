var ColorModel = require("./../models/colorModel.js");


module.exports = {

  read: function(req, res){
    ColorModel.find(req.query)
      .populate('colors')
      .exec(function(err, result){
        if(err){
          res.send(err);
        }else{
          res.send(result);
        }
      });
  },
  create: function(req, res){
    var Color = new ColorModel(req.body);
    Color.save(function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  // update: function(req, res){
  //   GalaxiesModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
  //     if(err){
  //       res.send(err);
  //     }else{
  //       res.send(result);
  //     }
  //   });
  // },
  // delete: function(req, res){
  //   GalaxiesModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
  //     if(err){
  //       res.send(err);
  //     }else{
  //       res.send(result);
  //     }
  //
  //   });
    //
















}
