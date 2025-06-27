module.exports = {
  name: "adamjolicoeur.com", // optional, falls back to object key
  description: "Adam's personal website and portfolio",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  // skip: !process.env.CONTEXT || process.env.SITE_NAME !== "adamjolicoeur",
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site"
  },
  urls: [
    "https://www.adamjolicoeur.com/",
    "https://www.adamjolicoeur.com/about/",
    "https://www.adamjolicoeur.com/resume/",
    "https://www.adamjolicoeur.com/credits/",
    "https://www.adamjolicoeur.com/uses/",
    "https://www.adamjolicoeur.com/testimonials/",
    // Popular Posts
    "https://www.adamjolicoeur.com/designs/",
    "https://www.adamjolicoeur.com/designs/task-it/",
    "https://www.adamjolicoeur.com/designs/alm/",
    "https://www.adamjolicoeur.com/designs/customer-engagement/",
    "https://www.adamjolicoeur.com/development/",
  ]
};
