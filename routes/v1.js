var v1dealTrackingBoardRouter = require('../src/routers/v1/deal-tracking-board-router');
var v1dealTrackingStageRouter = require('../src/routers/v1/deal-tracking-stage-router');
var v1dealTrackingDealRouter = require('../src/routers/v1/deal-tracking-deal-router');
var v1dealTrackingActivityRouter = require('../src/routers/v1/deal-tracking-activity-router');

module.exports = function(server) {
    v1dealTrackingBoardRouter().applyRoutes(server,                             "/v1/deal-tracking-boards");
    v1dealTrackingStageRouter().applyRoutes(server,                             "/v1/deal-tracking-stages");
    v1dealTrackingDealRouter().applyRoutes(server,                              "/v1/deal-tracking-deals");
    v1dealTrackingActivityRouter().applyRoutes(server,                          "/v1/deal-tracking-activities"); 
};