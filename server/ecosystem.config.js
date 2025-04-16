module.exports = {
  apps: [
    {
      name: "RentalApp",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
