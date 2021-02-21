const { Text, Relationship, Select } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    description: {
      type: Text,
      isRequired: true,
      isMultiline: true,
    },
    photo: {
      type: Relationship,
      ref: 'TopicImage',
      many: false,
    },
    status: {
      type: Select,
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      isRequired: true,
    },
    courses: {
      type: Relationship,
      ref: 'Course.topic',
      many: true,
    },
  },
};
