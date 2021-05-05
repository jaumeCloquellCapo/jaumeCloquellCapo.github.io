window.__NUXT__={staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1620234542",layout:"default",error:null,state:{pageType:"post",title:"Getting Started",subtitle:"Get Up and Running with Awake",featureImage:"\u002Fuploads\u002Fgetting-started-hero.jpg",content:"Awake is a Nuxt.js template for generating a beautifully robust static site with blog. \n\n# Features\n\n* Simple modern design based on the Bulma css framework (with unused css purged via [purgecss](https:\u002F\u002Fwww.purgecss.com\u002F))\n* Site search\n* Statically generated API for posts and categories\n* Disqus powered comments\n* Mailchimp powered newsletter\n* Highly customizable with out of the box configurations\n* Built with performance in mind\n* Isolated Netlify CMS driver (with more CMS drivers planned for future) for easily migrating between various headless cms'\n* Images automatically resized for various screens and given srcsets\n\n# Use Awake on Netlify\n\nSimply click the \"Deploy to Netlify\" button and then configure it to fit your needs as described below.\n\n[![Deploy to Netlify!!](https:\u002F\u002Fwww.netlify.com\u002Fimg\u002Fdeploy\u002Fbutton.svg)](https:\u002F\u002Fapp.netlify.com\u002Fstart\u002Fdeploy?repository=https:\u002F\u002Fgithub.com\u002Fdanielkellyio\u002Fawake-template)\n\n# Configuration\n\nSite configuration is found in `\u002Fconfig\u002F_siteConfig.js`. Here you can customize site settings such as the site name, layout, disqus and mailchimp setup, image sizes and more. Any of these can be setup to use environment variables if you so desire, in order to be able to configure them directly from the Netlify interface. See the setup for google analytics which already uses an environment variable as an example of this.\n\n```\ngoogleAnalytics: {\n    on: true,\n    id: process.env.GOOGLE_ANALYTICS_ID\n},\n```\n\n# Editing Content\n\nPosts and categories can be edited in Netlify CMS at \\[your-site-url]\u002Fadmin. At this time any new pages must be created in the code itself and committed to the repo. Before you visit the admin for the first time, make sure you have [Netlify Identity](https:\u002F\u002Fwww.netlify.com\u002Fdocs\u002Fidentity\u002F) setup with your user and make sure \"Git Gateway\" is enabled via the Identity Settings page in the Netlify admin. \n\n# Local Development\n\nSince all content is store in the git repo with Netlify CMS, local development is a breeze. Simply install node, pull down the repo, install the dependencies with `npm install`, and run `npm run dev`.\n\n# Having Issues?\n\nIf you're having any issues feel free to reach out to me on twitter [@danielkelly.io](https:\u002F\u002Ftwitter.com\u002Fdanielkelly_io) or report an issue in [github repo](https:\u002F\u002Fgithub.com\u002Fdanielkellyio\u002Fawake-template).\n",author:"Daniel Kelly",date:"2019-08-03T19:59:59.000Z",isEmpty:false,excerpt:"",category:["About Awake"],slug:"getting-started-with-awake"},serverRendered:true,routePath:"\u002Fgetting-started-with-awake",config:{}};