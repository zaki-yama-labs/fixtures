const envalid = require("envalid");

module.exports = envalid.cleanEnv(process.env, {
  // FIXTURES_USER_A_TOKEN_FULL_ACCESS: envalid.str(),
  // FIXTURES_USER_B_TOKEN_FULL_ACCESS: envalid.str(),
  MY_TOKEN: envalid.str(),
});
