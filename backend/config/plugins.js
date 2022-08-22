module.exports = ({ env }) => ({
  // cloudinary settings with .env parameters
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUD_NAME"),
        api_key: env("API_KEY"),
        api_secret: env("API_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
