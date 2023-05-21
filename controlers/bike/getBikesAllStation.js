const uniqBy = require("lodash.uniqby");
const { Trip } = require("../../models/bike");

const getBikesAllStation = async (req,res)=> {

    const { page = '1', limit = '20' } = req.query; // пагинація
    const skip = (+page - 1) * limit;

    const allStations = await Trip.find(
        {},
        "DepartureStationId ReturnStationId DepartureStationName ReturnStationName",
       );
      
     const listId = (propertyId, propertyName) => allStations.flatMap((e)=> 
      [{id:e[propertyId], station:e[propertyName] }]);
     
     const stationList = [...listId('DepartureStationId', 'DepartureStationName'),...listId('ReturnStationId', 'ReturnStationName')];
     const cleanStations = uniqBy(stationList,'id').sort((a,b)=> a.station.toLowerCase() > b.station.toLowerCase()?1:-1);
      
      res.json({
        data: cleanStations.slice(skip,+limit * page),
        totalPage: Math.ceil(cleanStations.length / limit).toString(),
        currPage: page ?? "1",
        });
};

module.exports = getBikesAllStation;