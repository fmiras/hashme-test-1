# Hashme Test 1
Repo of Hashme recruting test #1

## Installation
First clone the repo on your work directory and create a file on the root project folder named `.env` with the configuration of the Mongo database, here's an example:
```plaintext
MONGO_URL=mongodb://localhost:27017/
MONGO_DB=test
```

Then open the terminal on the root project folder and run the following commands:
```bash
yarn
yarn start
```

Or with NPM:
```bash
npm install
npm start
```

The server is now listening at port `:3000`

## Usage
The service listens for requests at `/`. You can retrieve all the hotels by doing a simple request with no params with the following object structure:
```json
{
    "hotels": [
        {
            "name": "Hotel Emperador",
            "stars": "3",
            "images": [],
            "price": "1596"
        }
    ]
}
```
Or you can also add url params to perform a query, here are some examples of the GET request to 

http://localhost:3000?stars=3

http://localhost:3000?stars=3&name=Hotel%20Emperador

http://localhost:3000?stars=3&price=1596
