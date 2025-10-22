export const config = {
  runner: 'local',

  // 👇 URL local del servidor Appium (el servicio la usará internamente)
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  specs: ['./tests/**/*.spec.js'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 16',
    'appium:platformVersion': '18.6',
    'appium:automationName': 'XCUITest',
    'appium:app': '/Users/patriciofuica/Library/Developer/Xcode/DerivedData/UICatalog-djyrljpxzstukoeszjqvlfhfzmzg/Build/Products/Debug-iphonesimulator/UICatalog.app',
    'appium:noReset': true,
  }],

  logLevel: 'info',
  framework: 'mocha',
  mochaOpts: { timeout: 60000 },

  reporters: [
    'spec',
    ['allure', { outputDir: 'reports/allure-results' }]
  ],

  /**
   * 🚀 Servicio de Appium (inicia automáticamente el servidor) // actualmente no funcional, appium lo ejecuto manual.
   */
  services: [
    ['appium', {
      command: '/usr/local/bin/appium', // 👈 ruta exacta detectada
      args: {
        address: '127.0.0.1',
        port: 4723,
        relaxedSecurity: true,
        debugLogSpacing: true,
      },
    }],
  ],
  
  before: async function () {
    console.log('🚀 Iniciando test suite...');
  },

  after: async function (result) {
    console.log('🏁 Suite finalizada. Resultado:', result ? '✅ Éxito' : '❌ Fallo');
  },

  afterTest: async function (test, context, { error, passed }) {
    if (!passed) {
      console.log(`📸 Test falló: ${test.title}`);
      const screenshotPath = `./reports/screenshots/${test.title.replace(/ /g, '_')}.png`;
      await browser.saveScreenshot(screenshotPath);
      console.log(`🖼️ Screenshot guardado en: ${screenshotPath}`);
    } else {
      console.log(`✅ Test pasado: ${test.title}`);
    }
  },


}