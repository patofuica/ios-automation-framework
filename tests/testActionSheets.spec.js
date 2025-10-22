const ActionSheetsPage = require('../pages/ActionSheetsPage');

describe('Pruebas iOS - Action Sheets', () => {
  it('debería ejecutar correctamente el flujo completo', async () => {
    // Primer ingreso
    await ActionSheetsPage.openActionSheets();
    await ActionSheetsPage.clickOkayCancel();
    await ActionSheetsPage.clickOk();
    await ActionSheetsPage.backToCatalog();

    // Segundo ingreso
    await ActionSheetsPage.openActionSheets();
    await ActionSheetsPage.clickOkayCancel();
    await ActionSheetsPage.clickCancel();
    await ActionSheetsPage.backToCatalog();

    // Tercer ingreso
    await ActionSheetsPage.openActionSheets();
    await ActionSheetsPage.clickOther();
    await ActionSheetsPage.clickDestructive();
    await ActionSheetsPage.backToCatalog();

    // Último ingreso y dejar el flujo en la pantalla principal.
    await ActionSheetsPage.openActionSheets();
    await ActionSheetsPage.clickOther();
    await ActionSheetsPage.clickSafe();
    await ActionSheetsPage.backToCatalog();

    console.log("✅ Flujo completo ejecutado exitosamente");
  });
});
