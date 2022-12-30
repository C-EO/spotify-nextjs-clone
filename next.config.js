/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    CLIENT_ID:"fd8497bbd70244088bfece06c53bfca7",
    CLIENT_SECRET:"a789686148a24deeb1895221fe4161f9"
  },
  
  images: {
    domains: [
      "i.scdn.co",
      "seed-mix-image.spotifycdn.com",
      "charts-images.scdn.co",
      "daily-mix.scdn.co",
      "mosaic.scdn.co",
      "thisis-images.scdn.co",
      "seeded-session-images.scdn.co",
      "newjams-images.scdn.co",
    ],
  },
};

module.exports = nextConfig;
