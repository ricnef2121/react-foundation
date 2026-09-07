# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# react-foundation
# react-foundation

```javascript
// Importar la biblioteca
const createClient = require('@rmo0/tmail');

// 1. Crear el cliente
const client = createClient({
    // proxyUrl: process.env.PROXY_URL || null, // Opcional: URL de un proxy HTTP/HTTPS
    tokenCachePath: './token-cache.json', // Ruta para guardar la caché del token
    // timeout: 30000,                    // Opcional: Tiempo de espera para peticiones (ms)
    // maxRetries: 3,                     // Opcional: Número de reintentos
    // retryDelay: 1000,                  // Opcional: Retraso entre reintentos (ms)
});

async function main() {
    try {
        // 2. Generar una nueva dirección de correo temporal
        const email = await client.generateEmail();
        console.log(`📧 Dirección de correo generada: ${email}`);

        // 3. Esperar a recibir un mensaje de un remitente específico
        console.log('⏳ Esperando un correo de "no-reply@example.com"...');
        const message = await client.waitForMessage({
            expectedFrom: 'no-reply@example.com', // El remitente que esperas
            timeout: 30000,                       // Tiempo máximo de espera (30 segundos)
            pollInterval: 5000,                   // Intervalo entre comprobaciones (5 segundos)
        });

        if (!message) {
            console.log('⏰ Tiempo de espera agotado. No se recibió ningún mensaje.');
            return;
        }

        console.log(`📨 Mensaje recibido de: ${message.sender}`);
        console.log(`📝 Asunto: ${message.subject}`);

        // 4. Obtener el cuerpo del mensaje (en formato HTML)
        const htmlBody = await client.getMessageBody(message.messageID);
        console.log('📄 Cuerpo del mensaje (HTML):', htmlBody);

        // Aquí puedes usar un parser como 'cheerio' para extraer códigos o enlaces del HTML
        // Ejemplo: const $ = cheerio.load(htmlBody); const code = $('div.code').text();

    } catch (error) {
        console.error('❌ Ocurrió un error:', error);
    }
}

main();

```
