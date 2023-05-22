const { Trip } = require("../models/bike");
const funcFindController = require("./helpers/funcFindController");
const funcGetTotalPage = require("./helpers/funcGetTotalPage");


const getBikesFunded = async (req,res)=> {

    const {station} = req.params;   
    const { page = '1', limit = '20' } = req.query; // пагинація
    const skip = (+page - 1) * limit;
     
        const nameTrip =  await Trip.aggregate([
       {$match: funcFindController(station)}, {$skip:skip}, {$limit: +limit},
    ]);
     
    res.json({
      data: nameTrip,
      totalPage: await funcGetTotalPage(funcFindController(station),+limit),
      currPage: page ?? "1",
      });

};

module.exports = getBikesFunded;