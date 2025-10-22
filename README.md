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




