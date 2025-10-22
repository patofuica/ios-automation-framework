class ActionSheetsPage {
    get firstCell() { return $('XCUIElementTypeCell'); }
    get okayCancelButton() { return $("//*[contains(@label, 'Okay') or contains(@name, 'Okay')]"); }
    get okButton() { return $("//XCUIElementTypeButton[@label='OK' or @name='OK']"); }
    get cancelButton() { return $("//XCUIElementTypeButton[@label='Cancel' or @name='Cancel']"); }
    get otherOption() { return $("//XCUIElementTypeStaticText[@label='Other' or @name='Other']"); }
    get destructiveChoice() { return $("//XCUIElementTypeButton[@label='Destructive Choice' or @name='Destructive Choice']"); }
    get safeChoice() { return $("//XCUIElementTypeButton[@label='Safe Choice' or @name='Safe Choice']"); }
    get backButton() { return $("//XCUIElementTypeButton[@name='UICatalog']"); }
  
    async openActionSheets() {
      await this.firstCell.click();
      console.log("📂 Abriendo Action Sheets");
    }
  
    async clickOkayCancel() {
      await this.okayCancelButton.waitForDisplayed({ timeout: 5000 });
      await this.okayCancelButton.click();
    }
  
    async clickOk() {
      await this.okButton.waitForDisplayed({ timeout: 5000 });
      await this.okButton.click();
    }
  
    async clickCancel() {
      await this.cancelButton.waitForDisplayed({ timeout: 5000 });
      await this.cancelButton.click();
    }
  
    async clickOther() {
      await this.otherOption.waitForDisplayed({ timeout: 5000 });
      await this.otherOption.click();
    }
  
    async clickDestructive() {
      await this.destructiveChoice.waitForDisplayed({ timeout: 5000 });
      await this.destructiveChoice.click();
    }
  
    async clickSafe() {
      await this.safeChoice.waitForDisplayed({ timeout: 5000 });
      await this.safeChoice.click();
    }
  
    async backToCatalog() {
      await this.backButton.waitForDisplayed({ timeout: 5000 });
      await this.backButton.click();
    }
  }
  
  module.exports = new ActionSheetsPage();
  