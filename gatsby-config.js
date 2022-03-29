/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Prydan-Create Success Stories`,
    description: `Create Success Stories
`,
  },
  /* Your site config here */

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
        { 
          resolve: `gatsby-source-filesystem`, 
        options: { 
          name: `content`,
          path: `${__dirname}/content`,
          } 
    },
    { 
      resolve: `gatsby-source-filesystem`, 
    options: { 
      name: `images`,
      path: `${__dirname}/src/images/`,
      } 
    },
    // {
		// 	resolve: `gatsby-source-wordpress`,
		// 	options: {
		// 		url:
		// 			process.env.WPGRAPHQL_URL ||
		// 			`https://prydansoftware.com/graphql`,
		// 	},
		// },
    {
    resolve: `gatsby-source-wordpress`,
   
      options: {
        url:
        // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL ||
          `https://prydansoftware.com/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        timeout: 100000,
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: false,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  50,
          },
        },
      },
    },
  
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
  
  ],
}
