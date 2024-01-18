---
title: Auth0 initialization
date: "2023-10-14"
techStack: ["Auth0", "RBAC", "React", "Typescript"]
background: "#4169e1"
image: img/auth0-rbac/1.png
description: "Authentication and Authorization system Auth0 and RBAC "
category: web
categories: ["Auth0", "RBAC"]
---

# Introduction

The Other day, I have got a technical interview and got one question below.

> Interviewer: What would you do, or what are some things you could do to ensure that records are securely deleted from a REST API, you must ensure that only authorized users have the permission to delete records.

At the time, I couldn't answer effectively, and I thought this is a good question to measure someone's knowledge about authentication and authorization. so I learned by implementing simple authentication process.

System is composed of **SPA(React.js)** + **Backend(By our own)** + **Auth0**.

Auth0 is framework to support to develop authentication and authorization mechanism. Login and Logout function can also be developed with it.

I used Auth0 SDK with JS called [auth0-spa-js](https://github.com/auth0/auth0-spa-js) to integrate auth function.

## This sample application has these functions.

- Login/Logout function
- Scope management based on RBAC strategy for backend API

## SPA application Setting on Auth0

What we set at Auth0 management console.

- Auth0
  - Applications
    - Applications
    - APIs
      - Permisssion
  - User Management
    - Users
    - Roles

### Create SPA application Setting

<img src="/img/auth0-rbac/1.png" alt="1" width="500" height="300">

### Set callback, allowed web origin, allowed logout urls.

In this time, we run this app locally, set them all to **http://localhost:3000**.

<img src="/img/auth0-rbac/2.png" alt="2" width="500" height="300">

In this case, we will assume that it is an AccessToken for calling the https://api.sample.dev/ API.

<img src="/img/auth0-rbac/3.png" alt="3" width="500" height="300">

```typescript
import { Auth0Client, User } from "@auth0/auth0-spa-js";
import { useState } from "react";

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENTID = process.env.REACT_APP_AUTH0_CLIENTID;

if (!AUTH0_DOMAIN || !AUTH0_CLIENTID) {
  throw new Error("Required environment variables are not set.");
}

const auth0 = new Auth0Client({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENTID,
  authorizationParams: {
    redirect_uri: "http://localhost:3000",
    audience: "https://api.sample.dev/",
    scope: "read:all write:all",
  },
});

const Top = () => {
  const [user, setUser] = useState<User | undefined>();
  const onClickLogin = async () => {
    await auth0.loginWithRedirect();
  };

  const onClickLogout = async () => {
    auth0.logout();
  };

  const getUserInfo = async () => {
    // Debug access token
    const accessToken = await auth0.getTokenSilently();
    console.log("accessToken: ", accessToken);

    // Debug user info
    const user: User | undefined = await auth0.getUser();
    setUser(user);
    console.log("user: ", user);

    // Debug IDToken
    const claims = await auth0.getIdTokenClaims();
    console.log("claims: ", claims);
  };

  return (
    <div>
      <div>
        <button onClick={onClickLogin}>Login</button>
        <button onClick={onClickLogout}>Logout</button>
      </div>
      <div>{JSON.stringify(user, null, 2)}</div>
      <div>
        <button onClick={getUserInfo}>getInfo</button>
      </div>
    </div>
  );
};

export default Top;
```
