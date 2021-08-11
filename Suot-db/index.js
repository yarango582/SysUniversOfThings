const setupDatabase = require('./lib/db.lib');
const setupAgentModel = require('./models/agent.model');
const setupMetricModel = require('./models/metric.model');

module.exports = async (config) => {
  const sequelize = setupDatabase(config);
  const AgentModel = setupAgentModel(config);
  const MetricModel = setupMetricModel(config);

  AgentModel.hasMany(MetricModel);
  MetricModel.belongsTo(AgentModel);

  await sequelize.authenticate();
  if (config.setup) {
    await sequelize.sync({ force: true });
  }
  const Agent = {};
  const Metric = {};

  return {
    Agent,
    Metric
  }

}
