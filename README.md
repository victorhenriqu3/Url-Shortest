# 🔗 Url-Shortest

URL shortening service using Node

<br>

## 🎯 Objective

Implement a URL shortening service using Node and MySQL.

<br>

## 💼 Brief

ShortLink is a URL shortening service where you enter a URL such as https://codesubmit.io/library/react and it returns a short URL such as http://short.est/GeAi9K.

<br>

## 📌 Tasks

- [x] Two endpoints are required:

  - [x] /encode - Encodes a URL to a shortened URL

  - [x] /decode - Decodes a shortened URL to its original URL

  - [x] Both endpoints should return JSON

<br>

- [x] Persist the URLs to a database of your choice.

- [x] Provide detailed instructions on how to run your assignment in a separate markdown file (e.g. README.md).

### 📦 Bonus

- [x] Provide API tests for both endpoints

<br>

## 💻 Prerequisites

Before starting, make sure you've met the following requirements:
  * You have installed the latest version of [`node`](https://nodejs.org/en/)
  
<br>

## 🚀 Installing
To install `Url-Shortest`, follow these steps:

NPM:
```
npm install
```

Yarn:

```
yarn install
```

## ☕ Using

To Use `Url-Shortest`, follow these steps:

```console
touch config.json
```

After that, fill in the information in the `config.json` file following the model below:

```json
{
  "db": {
    "host": "*****",
    "user": "*****",
    "password": "*****",
    "database": "****"
  }
}
```
<br>

After that you can start the application in development mode using:

NPM:
```console
npm run dev
```

Yarn:

```console
yarn dev
```

## 🧪 Testing `url_shortest`

- Tests were implemented using [Jest](https://jestjs.io) and [Supertest](https://github.com/visionmedia/supertest).
  
To Use `Url-Shortest`, follow these steps:
NPM:
```console
npm run test
```

Yarn:

```console
yarn test
```