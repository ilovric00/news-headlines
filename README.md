Inspired by [Next.js's example](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) for statically generated blog.

# News Headlines

Get breaking news headlines as they happen around the world. This simple app use [News API](https://newsapi.org/) for searching and retrieving live articles from all over the web.

## Demo

![Demo](./public/demo.png)

---

## How to use

### Prerequisites

First, make sure you have `Node.js` (**npm** or **yarn**) installed.

```
$ node -v
v12.x.x
```

Also, you can use `nvm` as a helpful tool to install the correct **node** and **npm**/**yarn** version.

### Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (_which will be ignored by Git_):

```bash
cp .env.local.example .env.local
```

Then open `.env.local` file and set API_KEY to be your News API Key. You can get API Key [here](https://newsapi.org/register).

Your `.env.local` file should look like this:

```bash
API_KEY=...
```

### Installing the application

```
$ git clone https://github.com/ilovric00/news-headlines.git <my-project-name>
$ cd <my-project-name>
$ yarn
```

_This command will install all of the latest dependencies. Installation might take some time._

### Running the application

```
$ yarn dev
```

_Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser._

### Building the application

```
$ yarn build
```

_Builds the application for production usage._

---

## Built with

- [Next.js](https://github.com/vercel/next.js) as a [React](https://github.com/facebook/react/) framework for Static Generation and Server-side Rendering
- [TypeScript](https://github.com/microsoft/TypeScript) as a language for application-scale JavaScript
- [Sass](https://github.com/sass/dart-sass) as CSS pre-processor

## Libraries

In addition several smaller libraries are used. Instructions on how to use them are linked below.

| Library                                               | Purpose                                                 |
| ----------------------------------------------------- | ------------------------------------------------------- |
| [date-fns](https://github.com/date-fns/date-fns)      | for manipulating JavaScript dates                       |
| [Classnames](https://github.com/JedWatson/classnames) | for conditionally joining classNames together           |
| [ESLint](https://github.com/eslint/eslint)            | for making code more consistent and avoiding bugs       |
| [Stylelint](https://github.com/stylelint/stylelint)   | for avoiding errors and enforcing conventions in styles |
| [Prettier](https://github.com/prettier/prettier)      | for code formatting                                     |
| [Husky](https://github.com/typicode/husky)            | for preventing bad commit or push                       |

See `package.json` for a complete overview.

---

## Folder structure

```
.
├── components                                 # place for all reusable components
│   └── {ComponentName}                        # reusable component
│   │   ├── {ComponentName}.module.scss        # component styles
│   │   ├── {ComponentName}.tsx                # component
│   │   └── index.ts                           # for root component of a directory
├── lib                                        # place to store services, config, etc.
│   ├── api.ts                                 # API functions
│   └── config.ts                              # place to store all config data
├── pages                                      # place to store pages (routes); each page should match a route
│   ├── api                                    # API routes
│   ├── {page}                                 # place for page (route)
│   │   ├── [param].tsx                        # dynamic page (route)
│   │   └── index.tsx                          # page (route)
│   ├── _app.tsx                               # custom App
|   └── _document.tsx                          # custom Document
├── public                                     # place to store static files, like images
├── styles                                     # place to store global styles
├── types                                      # place to store all types
└── utils                                      # place to store all utility functions that are shared across the app

```

## Style Guide

As a "base" style guide, the [Airbnb's style guide](https://airbnb.io/javascript/react) is being used. Since we're applying different eslint configs that are combined with Airbnb's [config](https://yarnpkg.com/package/eslint-config-airbnb), large number of these rules are already enforced.

## Versioning

This project use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ilovric00/news-headlines/tags).

## Contributing

If you're interested in contributing to this project, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before submitting a pull request.
