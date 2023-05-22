

const funcFindController = (station)=>

!isNaN(+station) ?
 {$or: [
    { DepartureStationId: station},
    { ReturnStationId: station },
]}:
 {$or: [
    { DepartureStationName: { $regex: station, $options: "i" } },
    { ReturnStationName: { $regex: station, $options: "i" } },
]};


module.exports = funcFindController;