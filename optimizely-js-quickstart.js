// Import the Optimizely SDK
const optimizelySdk = require("@optimizely/optimizely-sdk");

// Initialize Optimizely SDK instance
const optimizely = optimizelySdk.createInstance({
  sdkKey: "3NchnAoyDQsEms7AqHJXp",
});

// Define a function to check if the Messi component should be shown
const shouldShowMessiComponent = (userId) => {
  const user = optimizely.createUserContext(userId);
  const decision = user.decide("removemessi");

    const messi = decision.variables.messi;
    console.log(`messi är ${messi}`);

  // Return true if the flag is not enabled for the user
  return !decision.enabled;
};

export { shouldShowMessiComponent };
