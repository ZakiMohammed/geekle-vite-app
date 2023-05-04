# Vite for TypeScript - Geekle

Geekle TypeScript Junior Session 2023.

App Link: https://geekle-vite-app.netlify.app/

### Initial Setup

```
npm create vite@latest

# or
npm create vite@latest geekle-vite-app --template vanilla-ts
```

For `TypeScript` add this package too, for Type Safety checks, otherwise Vite only transpile the code and doesn't do the type checking:
```
npm i vite-plugin-checker -D
```

Create `vite.config.js` file and add below config:

```
import checker from 'vite-plugin-checker';
export default {
  plugins: [
    checker({
      typescript: true,
    }),
  ],
};
```

### Run Application

Update the port to `4000` in the `package.json` file `dev` script command.

```
npm run dev
```

### Debug Application

For debugging go to VS Code `Run and Debug` side menu, click on the button `Debug URL`. Copy paste the running application URL to the option. This will create `.vscode` folder and adds `launch.json` file looks like this:

```
{
  "configurations": [
    {
      "type": "msedge",
      "name": "http://localhost:4000/",
      "request": "launch",
      "url": "http://localhost:4000/"
    }
  ]
}
```

### Build Application

To build the application run below command:

```
npm run build
```

Preview built application:

```
npm run preview
```
