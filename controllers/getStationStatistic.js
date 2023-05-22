const countBy = require("lodash.countby");
const pickBy = require("lodash.pickby");
const { Trip } = require("../models/bike");
const aggregateStatistic = require("./helpers/aggregateStatistic");


const getStationStatistic = async (req,res)=> {

    const {id} = req.params;  
   
 const funcGetTop = async(v,b)=>{    
   const arrTopFive = await Trip.find(v);
   const countTrips = countBy(arrTopFive.map((e)=> e[b]));

  const arrPopular =  Object.values(countTrips).sort((a,b)=>b - a).slice(0,5);
   
  return Object.fromEntries(Object.entries(pickBy(countTrips, e => arrPopular.includes(e))).sort((a,b)=> b[1] - a[1]).slice(0,5));
 }
   

   res.json({
    data: await aggregateStatistic(Trip,id),
    topdeparture: await funcGetTop({ DepartureStationId: id },'ReturnStationName'),
    topreturn: await funcGetTop({ ReturnStationId: id },'DepartureStationName'),
        });
};

module.exports = getStationStatistic;