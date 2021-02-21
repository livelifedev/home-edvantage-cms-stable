const { File, Text, Relationship } = require('@keystonejs/fields');
const { S3Adapter } = require('@keystonejs/file-adapters');

const s3 = new S3Adapter({
  bucket: process.env.S3_BUCKET_NAME,
  folder: 'uploads',
  s3Options: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET,
    region: process.env.S3_REGION,
  },
});

module.exports = {
  fields: {
    file: {
      type: File,
      adapter: s3,
    },
    name: {
      type: Text,
    },
    course: {
      type: Relationship,
      ref: 'Course.product',
      many: false,
    },
  },
  labelField: 'name',
};
