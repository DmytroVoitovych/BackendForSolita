

const aggregateStatistic = (trip,id) => 
 trip.aggregate([
    {
      $match: {
        $or: [{ DepartureStationId: id }, { ReturnStationId: id }]
      }
    },
    {
        $addFields: {
        departureStation:'$DepartureStationName',
            }
    },
    {
      $group: {
        _id: null,
        countDeparture: { $sum: { $cond: [{ $eq: ['$DepartureStationId', id] }, 1, 0] } },
        countReturn: { $sum: { $cond: [{ $eq: ['$ReturnStationId', id] }, 1, 0] } },
        nameStation: { $first: '$departureStation' },
        avgDeparture: {
            $avg: {
              $cond: [
                { $eq: ['$DepartureStationId', id] },
                { $toDouble: '$CoveredDistance' },
                null
              ]
            }
          },
          avgReturn: {
            $avg: {
              $cond: [
                { $eq: ['$ReturnStationId', id] },
                { $toDouble: '$CoveredDistance' },
                null
              ]
            }
          },
         }
     },
        {
      $project: {
        _id: 0,
        countDeparture: 1,
        countReturn: 1,
        nameStation: 1,
        address: `https://reittiopas.hsl.fi/pyoraasemat/${id.padStart('3',0)}`,
        avgDeparture: {$ceil: '$avgDeparture'},
        avgReturn: {$ceil: '$avgReturn'},
        }
    }
  ]);

  module.exports = aggregateStatistic;