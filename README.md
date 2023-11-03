<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Microservice setup of chat app

```
- microservice 1 (API)
    access point: localhost:4000

- microservice 2 (Presence)
    access point: localhost:6000

- microservice 1 (Chat)
    access point: localhost:7000
```

## Installation

```bash
$ npm install
```

## Running the app

```bash

# re-build containers
$ docker compose up --build

# run microservices
$ docker compose up

```

## Stay in touch

- Author - [Mayur Bhowad](https://bm-mayur.vercel.app/)
