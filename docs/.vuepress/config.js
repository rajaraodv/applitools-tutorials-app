module.exports = {
  title: "Applitools",
  head: [
    [
      "script",
      { src: "https://unpkg.com/medium-zoom@1.0.2/dist/medium-zoom.min.js" }
    ],
    [
      "script",
      { src: "/mediumZoom.js" }
    ]
  ],
  locales: {
    "/": { lang: "en-US" },
    "/zh/": { lang: "zh-CN" }
  },
  themeConfig: {
    //shows "Last updated" with the git commit time
    lastUpdated: "Last Updated",
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "rajaraodv/applitools-tutorials-app",
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: "GitHub",

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: "rajaraodv/applitools-tutorials-app",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    //editLinkText: 'Help us improve this page!',
    nav: [
      {
        text: "Signup",
        link:
          "https://applitools.com/users/register?utm_source=tutorials&utm_medium=tutorials"
      },
      {
        text: "Detailed Docs",
        link:
          "https://applitools.com/docs/index.html?utm_source=tutorials&utm_medium=tutorials"
      },
      {
        text: "Pricing",
        link:
          "https://applitools.com/docs/pricing.html?utm_source=tutorials&utm_medium=tutorials"
      }
      //  { text: "Features", link: "https://applitools.com/features?utm_source=tutorials&utm_medium=tutorials" }
    ],
    sidebar: ["/", "/selenium-javascript", "/selenium-java"]
  }
};
