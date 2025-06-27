module.exports = {
  name: "localhost", // optional, falls back to object key
  description: "Test a localhost instance before sending to server",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  skip: !process.env.CONTEXT || process.env.SITE_NAME !== "localhost",
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site"
  },
  urls: [
    "https://localhost:8081/",
    "https://localhost:8081/about/",
    "https://localhost:8081/resume/",
    "https://localhost:8081/credits/",
    "https://localhost:8081/uses/",
    "https://localhost:8081/testimonials/",
    // Popular Posts
    "https://localhost:8081/designs/",
    "https://localhost:8081/designs/task-it/",
    "https://localhost:8081/designs/alm/",
    "https://localhost:8081/designs/customer-engagement/",
    "https://localhost:8081/development/",
  ]
};
