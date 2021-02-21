const { Text, Relationship } = require('@keystonejs/fields');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { CloudinaryImage } = require('@keystonejs/fields-cloudinary-image');

const cloudinary = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'homeedvantage-course-covers',
});

module.exports = {
  fields: {
    image: {
      type: CloudinaryImage,
      adapter: cloudinary,
    },
    label: {
      type: Text,
    },
    course: {
      type: Relationship,
      ref: 'Course.photo',
      many: false,
    },
  },
  labelField: 'label',
};
