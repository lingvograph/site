const PATH_PREFIX = process.env.PATH_PREFIX || "/"

module.exports = {
  // App Info
  appstore_link: "https://lingvograph.com", // Enter App Store URL.
  playstore_link: "https://lingvograph.com", // Enter Google Play Store URL.
  google_analytics_ID: "UA-47311644-5", // Enter Google Analytics ID or ""
  video_or_screenshot: "video", // "screenshot" or "video"
  app_url: "https://lingvograph.com", // Domain of your website without path_prefix.
  path_prefix: PATH_PREFIX, // Prefixes all links. For cases when deployed to example.github.io/automatic-gatsbyjs-app-landing-page/.
  app_name: "LingvoGraph",
  app_price: "Free",
  app_description: "Improve your second languages with Social Knowledge Graph",
  app_keywords: ["automatic", "gatsbyjs", "app", "landing page"],

  // Personal Info
  your_name: "Sergey Todyshev",
  your_link: "https://tsvbits.com",
  your_city: "Berdsk",
  email_address: "stodyshev@gmail.com",
  linkedin_username: null,
  facebook_username: null,
  instagram_username: null,
  twitter_username: "todysh",
  github_username: "sergeyt",
  youtube_username: null,

  // Features List
  features: [
    {
      title: "Big Knowledge Graph",
      description: "You can get and share knowledge",
      fontawesome_icon_name: "magic",
    },
    {
      title: "Social Network",
      description:
        'Graph contains social data. So you can make "likes" and make trends',
      fontawesome_icon_name: "play-circle",
    },
    {
      title: "Audio Sharing",
      description: "You can share your lovely voice and listen popular voices",
      fontawesome_icon_name: "mobile",
    },
    {
      title: "Photo and Video Sharing",
      description:
        "You can share your visual associations with given words/phrases",
      fontawesome_icon_name: "sync",
    },
    {
      title: "Free Data",
      description:
        "Data aggregated from internet are free. You can decide whether your own data is free or should be available only for premium users",
      fontawesome_icon_name: "star",
    },
    {
      title: "Android and iOS apps",
      description: "Optimized Android and iOS apps to explore the graph data",
      fontawesome_icon_name: "adjust",
    },
  ],
  header_background: "rgba(0, 0, 0, 0.1)",
  topbar_title_color: "#ffffff",
  cover_overlay_color_rgba: "rgba(54, 59, 61, 0.8)",
  device_color: "black", // Set to "black", "blue", "coral", "white", or "yellow"
  body_background_color: "ffffff",
  primary_text_color: "#000",
  content_width: "1170px",
  font: `"Helvetica Neue", sans-serif`,
  link_color: "#1d63ea",
  app_title_color: "#ffffff",
  app_price_color: "#ffffff",
  app_description_color: "#ffffff",
  feature_title_color: "#000000",
  feature_text_color: "#666666",
  feature_icons_foreground_color: "#1d63ea",
  feature_icons_background_color: "#e6e6e6",
  social_icons_foreground_color: "#666666",
  social_icons_background_color: "#e6e6e6",
  footer_text_color: "#666666",
}
