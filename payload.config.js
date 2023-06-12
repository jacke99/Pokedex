// const path = require("path");
const { buildConfig } = require("payload/config");
const Users = require("./collections/Users");
// const { seedPages, seedUsers } = require("./seed/index");

const config = buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users],
  // onInit: async (payload) => {
  //   if (process.env.NODE_ENV === "development") {
  //     await seedUsers(payload);
  //     await seedPages(payload);
  //   }
  // },
});

module.exports = config;
