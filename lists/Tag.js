const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    courses: {
      type: Relationship,
      ref: 'Course.tags',
      many: true,
    },
  },
};
