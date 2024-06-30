const fs = require('fs');
const path = require('path');

// .env 파일이 존재하는지 확인하고, 존재하면 dotenv 로드
const envPath = path.resolve(__dirname, '.env');
if (fs.existsSync(envPath)) {
    require('dotenv').config({
        path: envPath,
    });
}

module.exports = {
    pathPrefix: "/blog",
    plugins: [
        `gatsby-plugin-typescript`,
        'gatsby-plugin-postcss',
    ],
}