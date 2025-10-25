# 📱 iOS Automation Framework (Appium + WebdriverIO + Mocha)

Framework de automatización móvil desarrollado para pruebas en **entornos iOS**, utilizando **Appium**, **WebdriverIO (WDIO)**, **Mocha**, **Allure Reports** y el **patrón Page Object Model (POM)**.

Este proyecto ejecuta pruebas automatizadas sobre la aplicación **UICatalog** (demo de Apple), validando componentes como Action Sheets, Alerts y Buttons.

---

## 🧩 **Tecnologías utilizadas**

| Herramienta | Propósito |
|--------------|-----------|
| 🧪 **WebdriverIO (WDIO)** | Runner principal para ejecutar las pruebas automatizadas |
| 🤖 **Appium** | Framework de automatización para aplicaciones móviles nativas |
| ☕ **Mocha** | Framework de testing basado en JavaScript |
| 🧱 **Page Object Model (POM)** | Patrón para estructurar código modular y reutilizable |
| 📊 **Allure Reports** | Generación de reportes visuales y detallados de ejecución |
| 🧰 **Node.js / NPM** | Entorno de ejecución y gestión de dependencias |

---

## ⚙️ **Estructura del proyecto**

```bash
ios-automation-framework/
├── config/                # Configuración de capacidades y entorno
│   ├── wdio.conf.js       # Archivo principal de configuración de WebdriverIO
├── pages/                 # Clases con los Page Objects
│   ├── actionSheets.page.js
│   ├── alerts.page.js
│   └── buttons.page.js
├── tests/                 # Casos de prueba automatizados
│   ├── actionSheets.test.js
│   ├── alerts.test.js
│   └── buttons.test.js
├── package.json           # Dependencias y scripts de NPM
├── .gitignore
└── README.md

``` 
## 🚀 **Instalación y ejecución**

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/patofuica/ios-automation-framework.git
cd ios-automation-framework
``` 

### 2️⃣ Instalar dependencias
```bash
npm install
``` 

### 3️⃣ Iniciar el servidor Appium
En una terminal separada:
```bash
appium
``` 
### 4️⃣ Ejecutar las pruebas
```bash
npx wdio run ./config/wdio.conf.js
``` 

### 5️⃣ Ver los reportes (Allure)
```bash
npx allure serve allure-results
```

## 🧱 **Patrón de diseño: Page Object Model (POM)**

Cada pantalla o componente de la app está representado por una clase JavaScript que encapsula sus elementos y acciones.  
Esto permite mantener el código **modular, escalable y reutilizable**.

**Ejemplo:**
```js
// pages/actionSheets.page.js
class ActionSheetsPage {
  get actionSheetButton() { return $('//XCUIElementTypeButton[@name="Action Sheets"]'); }

  async open() {
    await this.actionSheetButton.click();
  }
}
export default new ActionSheetsPage();
```

## 🧪 **Ejecución de pruebas**

**Ejemplo de test:**
```js
// tests/actionSheets.test.js
import ActionSheetsPage from '../pages/actionSheets.page.js';

describe('Action Sheets', () => {
  it('should display the correct alert options', async () => {
    await ActionSheetsPage.open();
    // Validaciones...
  });
});
```


## 📊 **Reportes con Allure**

Después de cada ejecución, se generan reportes en la carpeta `reports/allure-results/`.  
Puedes visualizarlos con:
```bash
npx allure open
 ```

## 👨‍💻 **Autor**

**Patricio Fuica**  
📍 *Viña del Mar, Chile*  
🔗 [github.com/patofuica](https://github.com/patofuica)





