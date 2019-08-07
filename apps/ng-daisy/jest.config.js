module.exports = {
  name: 'ng-daisy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-daisy',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
