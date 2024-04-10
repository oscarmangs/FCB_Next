
const optimizelySdk = require("@optimizely/optimizely-sdk");

const optimizely = optimizelySdk.createInstance({
  sdkKey: "U6iDSrMEkHuNe4jCbaA8f",
});

const shouldShowMessiComponent = (userId) => {
  const user = optimizely.createUserContext(userId);
  const decision = user.decide("removemessi");

  const messi = decision.variables.messi;
  console.log(`messi är ${messi}`);

  return !decision.enabled;
};

module.exports = { shouldShowMessiComponent };
