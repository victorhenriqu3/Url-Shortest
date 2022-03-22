# 🔗 Url-Shortest

URL shortening service using Node

<br>

## 🎯 Objective

Implement a URL shortening service using Node and MySQL.

<br>

## 📌 Tasks

- [ ] Two endpoints are required:

  - [ ] /encode - Encodes a URL to a shortened URL

  - [ ] /decode - Decodes a shortened URL to its original URL

  - [ ] Both endpoints should return JSON

<br>

- [ ] Persist the URLs to a database of your choice.

- [ ] Provide detailed instructions on how to run your assignment in a separate markdown file (e.g. README.md).

### 📦 Bonus

- [ ] Provide API tests for both endpoints

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
