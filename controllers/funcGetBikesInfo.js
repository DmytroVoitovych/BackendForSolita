const {
  funcGetDataPage,
} = require("./helpers/funcGetDataPage");
const funcGetTotalPage = require("./helpers/funcGetTotalPage");

const funcGetBikesInfo = async ({ query }, res) => {
  const { page = 1, limit = 20 } = query; // пагинація
  const skip = (page - 1) * limit;

  if (query.page === undefined) {
    return res.json({
      status: 200,
      stationInfo: await funcGetDataPage({
        skip,
        limit: +limit,
      }),
      totalPage: await funcGetTotalPage(undefined,+limit),
      currPage: page ?? "1",
    });
  } else {
    return res.json({
      status: 200,
      stationInfo: await funcGetDataPage({
        skip,
        limit: +limit,
      }),
      totalPage: await funcGetTotalPage(undefined,+limit),
      currPage: page ?? "1",
    });
  }
};

module.exports = funcGetBikesInfo;
