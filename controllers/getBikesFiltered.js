const { Trip } = require("../models/bike");
const funcGetTotalPage = require("./helpers/funcGetTotalPage");


const getBikesFiltered = async (req, res) => {
  const {to} = req.params;   
  const { page = '1', limit = '20' } = req.query; // пагинація
  const skip = (+page - 1) * limit;
  
  const durationTrip =  await Trip.aggregate([
    {$addFields: { transformToNumber: { $toDouble: "$Duration" } } },
    {$sort:{transformToNumber: to === 'big' && to?1:-1}},
    {$skip:skip},
    {$limit: +limit},
    {$project:{transformToNumber:0}}
]);
   
  res.json({
    stationInfo: durationTrip,
    totalPage: await funcGetTotalPage(undefined,+limit),
    currPage: page ?? "1",
    });
};

module.exports = getBikesFiltered;

// ****************************** //
// опис 
// сортування зроблено від більшого до меньшого і навпаки

