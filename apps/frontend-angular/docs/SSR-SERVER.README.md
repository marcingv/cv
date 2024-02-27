# How to run SSR server

To run angular app SSR server run command:

```bash
node server.mjs
```

**!!! This command would not load .env file variables by default !!!**

## Loading server .env variables on startup

To load `.env` configuration file during server startup run:

```bash
node --env-file=.env server.mjs
```

