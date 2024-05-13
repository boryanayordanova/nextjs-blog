const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        monngodb_username: "boryanayourdanova",
        monngodb_password: "admin-bory",
        monngodb_clustername: "cluster0",
        monngodb_database: "nextjs-blog-dev",
      },
    };
  }

  return {
    env: {
      monngodb_username: "boryanayourdanova",
      monngodb_password: "admin-bory",
      monngodb_clustername: "cluster0",
      monngodb_database: "nextjs-blog",
    },
  };
};
