export const SITE = {
  website: "https://xxxu.com.cn/", // replace this with your deployed domain
  author: "xxxu",
  profile: "https://xxxu.com.cn/",
  desc: "记录技术学习、编程实践与生活思考，分享学习方法、成长复盘与个人感悟，在技术精进与生活平衡中持续进步，做长期主义的成长记录者。",
  title: "xxxu-me",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
