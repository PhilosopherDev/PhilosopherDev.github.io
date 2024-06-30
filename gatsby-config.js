require("dotenv").config({
    path: `.env`,
});

module.exports = {
    pathPrefix: "/blog",
    plugins: [
        `gatsby-plugin-typescript`,
        'gatsby-plugin-postcss',
    ],
}