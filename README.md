

## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/master7dok/app_uses_API_Exchange_for_luxdone)
- Clone the repo: `https://github.com/master7dok/app_uses_API_Exchange_for_luxdone.git`

### Running documentation locally

1. Run `npm install` to install the Node.js dependencies.
2. Run `npm run start` to start the server or Run `npm run dev` to run with nodemon.
3. Open `http://localhost:3000` in your browser to go to the main page.
Here you can enter values from the keyboard in the field of any currency you choose and then the other cells will change their value by calculating the exchange rate from the external open [API](fromhttps://api.exchangeratesapi.io/latest) which is hidden in the backend on the server side and the frontend receives it at `http://localhost:3000/api/getex`.
4. Open `http://localhost:3000/exchanges.html` in your browser or click `Go to the list of Exchanges`to go to the page where you can saw the list of exchanges. Here you can see the list of status of exchangers which takes data from the API written on a backend from the JSON file from the address `http:/localhost:3000/api/exchange`. You can also add a new exchange by typing it in the field and clicking 'Add new Exchanger', and delete by clicking on an existing one 


## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
Luxdone_node_api_express_exchange/
├── client/
│   ├── img.css
│       ├── eu.png
│       ├── img.jpg
│       ├── img2.jpg
│       ├── pl.png
│       ├── ru.png
│       ├── usd.png
│├── controllers
│   ├── exchanges_control.js
│├── node_modules
│├── Routes
│   ├── exchange_routes.js
│├── .gitignore
│├── app.js
│├── package.json
│├── package-lock.json
│├── README.md
│   
```



## Documentation

Node js documentation [Node](https://nodejs.org/docs/latest-v13.x/api/) 
Express documentation [Express](https://expressjs.com/ru/starter/installing.html) 
Vue documentation [Vue](https://vuejs.org/v2/guide/) 



## Creator

**Mykhailo Babiuk**



