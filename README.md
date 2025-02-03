Vue Base App
Base app for vue3 Framework. Last updated at 29 DEC 2022

# Project Details

1. [Project Information](https://github.com/Nichi-In-Dev-Dept-1/base-vuejs/tree/vue-base-project-wip-harish#project-information)
2. [Packages](https://github.com/Nichi-In-Dev-Dept-1/base-vuejs/tree/vue-base-project-wip-harish#Packages)
3. [project setup](https://github.com/Nichi-In-Dev-Dept-1/base-vuejs/tree/vue-base-project-wip-harish#project-setup)
4. [Folders](https://github.com/Nichi-In-Dev-Dept-1/base-vuejs/tree/vue-base-project-wip-harish#folders)
5. [project Features](https://github.com/Nichi-In-Dev-Dept-1/base-vuejs/tree/vue-base-project-wip-harish#features)

# Project Information

This project is done using vue3 framework, Please check the official vue3 installation
<br/>
Framework : VUE3
<br/>
node Version : v18.12.1
<br/>
npm Version: 9.1.3

# Packages

1. [Vue3](https://vuejs.org/guide/introduction.html)
2. [Vite](https://vitejs.dev/)
3. [Pinia](https://pinia.vuejs.org/)
4. [Eslint](https://eslint.org/)
5. [Prettier](https://prettier.io/)
6. [Tailwind](https://tailwindcss.com/docs/installation)
7. [Localization](https://kazupon.github.io/vue-i18n/introduction.html)
8. [ErrorHandler](https://vuejs.org/guide/essentials/application.html#app-configurations)
9. [Vitest](https://vitest.dev/)
10. [Cypress](https://www.cypress.io/)

# Project SetUp

Please follow the below steps

1. Clone the Base repository from the Github using the command

```sh
git clone git@github.com:Nichi-In-Dev-Dept-1/base-vuejs.git
```

2. Install third party packages from package.json

```sh
npm install
```

3. Compile and Hot-Reload for Development

```sh
npm run dev
```

4. Type-Check

```sh
npm run type:check
```

5. Run Unit Tests with

```sh
npm run test:unit
```

6. Run Unit Tests for folder

```sh
npm run test:unit -t {folderName}
```

7. Run Unit Tests for single file

```sh
npm run test:unit -t {folderName/fileName}
```

8. Run End-to-End Tests with

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

9. Lint with

```sh
npm run lint
```

# Folders

-   `/src/App.vue` - Entry point
-   `/src/views/`- Create view pages segregate based on roles
-   `/src/views/admin/DashBoard.vue` - Create Admin module pages inside Admin Folder
-   `/src/views/user/DashBoard.vue` - Create User module pages inside User Folder
-   `/src/views/code/404.vue` - Create error files inside code
-   `/src/components/common ` - Create re usable components for all roles
-   `/src/components/admin` - Create components which are used for admin module
-   `/src/components/user`- Create components which are used for user module
-   `/src/router/admin.ts` - Defines the admin routes
-   `/src/router/user.ts` - Defines the user routes
-   `/src/router/index.ts` - Main route file
-   `/src/stores/admin.ts`- Application state store
-   `/src/services/http_client.ts` - Service folder for axios api configuration

# Features

1. Localization

Vue-i18n localization feature provide a convenient way to retrieve strings in various languages, allowing the application support multiple languages.

lang/en folder contains the files with english translation string.
lang/ja folder contains different files with japanese translation string.
You can introduce new language by creating the new folder within the lang directory example lang\spanish.

2. Error Logging

[Sentry](https://docs.sentry.io/) and [bugSnag](https://docs.bugsnag.com/) are used for error logging

To get the sentry_dsn and bugsnag_api key sing up for sentry and bugsnag

To enable sentry and bugsnag in .env file set sentry dsn , sentry flag , bugsnag api_key , bugsnag flag

```sh
#sentry
VITE_SENTRY_DSN='https://f2380291b64843eda9cce47f62864307@o4504372035256320.ingest.sentry.io/4504372036632576'
VITE_SENTRY_FLAG = "on"
#bugSnag
VITE_BUGSNAG_API_KEY='4aff1fba941ec622d65f971244553d75'
VITE_BUGSNAG_FLAG = "off"
```

3. Http status code

npm package is used for http status code

how to use

```sh
import { StatusCodes } from 'http-status-codes'

 if (error.response.status == StatusCodes.UNAUTHORIZED) {
            localStorage.removeItem('access_token')
            router.push({ name: 'Login' })
        }
```

4. Testing

Vitest is used for Unit Testing

How to create Test File

```sh
   --components
      --__tests__
         --{{folderName}}
            --{{vueFileName.spec.ts}}
```

Run All Test Cases

```sh
npm run test:unit
```

Run Unit Test for complete folder

```sh
npm run test:unit -t {folderName}
```

Run Unit Tests for single file

```sh
npm run test:unit -t {folderName/fileName}
```

5. env file

```sh
NODE_ENV={{development Mode}}
VITE_APP_API_URL={{api Url}}
#sentry
VITE_SENTRY_DSN={{sentry_dsn}}
VITE_SENTRY_FLAG = {{on/off}}
#bugSnag
VITE_BUGSNAG_API_KEY={{bugSnag_API_Key}}
VITE_BUGSNAG_FLAG = {{on/off}}
```
