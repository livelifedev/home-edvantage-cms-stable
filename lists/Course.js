const { Text, Relationship, Select } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    topic: {
      type: Relationship,
      ref: 'Topic.courses',
      many: false,
    },
    description: {
      type: Text,
      isRequired: true,
      isMultiline: true,
    },
    photo: {
      type: Relationship,
      ref: 'CourseImage.course',
      many: false,
    },
    product: {
      type: Relationship,
      ref: 'CourseFile.course',
      many: false,
    },
    tags: {
      type: Relationship,
      ref: 'Tag.courses',
      many: true,
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
  },
};
