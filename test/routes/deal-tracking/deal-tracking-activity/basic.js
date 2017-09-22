 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/deal-tracking-activities",
     model: require("dl-models").sales.DealTrackingActivity,
     validate: require("dl-models").validator.sales.dealTrackingActivity,
     util: require("dl-module").test.data.sales.dealTrackingActivity,
     keyword: null
 });