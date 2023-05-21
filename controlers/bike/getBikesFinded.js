const { Trip } = require("../../models/bike");
const funcFindControler = require("./helpers/funcFindControler");
const funcGetTotalPage = require("./helpers/funcGetTotalPage");


const getBikesFinded = async (req,res)=> {

    const {station} = req.params;   
    const { page = '1', limit = '20' } = req.query; // пагинація
    const skip = (+page - 1) * limit;
     
        const nameTrip =  await Trip.aggregate([
       {$match: funcFindControler(station)}, {$skip:skip}, {$limit: +limit},
    ]);
     
    res.json({
      data: nameTrip,
      totalPage: await funcGetTotalPage(funcFindControler(station),+limit),
      currPage: page ?? "1",
      });

};

module.exports = getBikesFinded;