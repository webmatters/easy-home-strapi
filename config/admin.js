module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c7c9e78d85238cd165cfe591017748f'),
  },
});
