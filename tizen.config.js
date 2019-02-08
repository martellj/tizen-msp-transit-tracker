module.exports = {
  displayName: 'Transit Tracker',
  projectId: 'uk1A2xnaIo',
  signatureName: "johnmsamsung",
  deviceIp: '192.168.0.11',

  // https://developer.tizen.org/ko/development/training/web-application/understanding-tizen-programming/security-and-api-privileges
  // Section: Wearable Web API Privileges
  privileges: [
    'internet',
    'power'
  ],

  // https://developer.tizen.org/ko/development/training/web-application/understanding-tizen-programming/application-filtering?langredirect=1
  // Table: Available requirements for wearable Web Device APIs
  features: []
}