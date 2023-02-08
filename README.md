# Nuxt Tailwind Components

> **DEVELOPMENT ON GOING : DON'T USE**

Use beautiful [Tailwind CSS](https://tailwindcss.com/) components with your Nuxt project. (Nuxt 2 & Nuxt 3 compatible).

## Tailwind install

You have to install Tailwind and dependencies.

For Nuxt 2

```bash
npm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8
npx tailwindcss init
```

For Nuxt 3

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

___

> See full installation and configuration of Tailwind for Nuxt.js [here](https://tailwindcss.com/docs/guides/nuxtjs).


## Install

Install by running the following command with your favorite package manager
```bash
npm install --save nuxt-tailwind-components
or
yarn install --save nuxt-tailwind-components
```

___

> This package uses [nuxt-tailwind-heroicons](https://tailwindcss.com/docs/guides/nuxtjs)

## Configuration

Add the package in `nuxt.config.[js, ts]`

For Nuxt 3
```javascript
export default defineNuxtConfig({
    //...
  modules: [
    'nuxt-tailwind-components'
  ]
    //...
})
```
For Nuxt 2
```javascript
export default {
    //...
  buildModules: [
    'nuxt-tailwind-components'
  ]
    //...
}
```

In the ```tailwind.config.js``` file, add package to content part :

```javascript
module.exports = {
    content: [
        "./nodes-modules/nuxt-tailwind-components/components/*.vue"
    ]
    //...
}
```

## Usage

Prefix of components is ````<tw-````. You can use it at like :

```html
<tw-alert title="This is awesome !"/>
```

Documentation will be soon available.

## And now enjoy ! 🚀

## Contribute
Open a pull request or issue if you have any recommendation.

## Licence
This project is licensed under the terms of the MIT open source license. Please refer to LICENSE for the full terms.
