# NestJS Socket.io Issue

## Deployed test

The public endpoint for this repository is https://nestsocket.z6.web.core.windows.net/

## Running locally

1. Clone the repository
2. Run `npm ci`
3. Run `npm compile`
4. Run `npm start`

The server will start on http://localhost:3000

Then, use any option to host the index.html file under the assets folder. **Update the index file to connect to localhost (instead of the deployed instance)!**

For example, using [http-server](https://www.npmjs.com/package/http-server):

```bash
cd assets
hs -p 1337
```
