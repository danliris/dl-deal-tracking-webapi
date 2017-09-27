var dealTrackingBoardRouter = require('../src/routers/v1/deal-tracking-board-router');
var dealTrackingStageRouter = require('../src/routers/v1/deal-tracking-stage-router');
var dealTrackingDealRouter = require('../src/routers/v1/deal-tracking-deal-router');
var dealTrackingActivityRouter = require('../src/routers/v1/deal-tracking-activity-router');

module.exports = function(server) {
    dealTrackingBoardRouter().applyRoutes(server,                              "/deal-tracking-boards");
    dealTrackingStageRouter().applyRoutes(server,                              "/deal-tracking-stages");
    dealTrackingDealRouter().applyRoutes(server,                               "/deal-tracking-deals");
    dealTrackingActivityRouter().applyRoutes(server,                           "/deal-tracking-activities");
};