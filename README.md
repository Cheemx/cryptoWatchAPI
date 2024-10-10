# Crypto Stats API

An API that fetches and stores real-time cryptocurrency data for Bitcoin, Ethereum, and Matic, allowing users to retrieve the latest stats and calculate historical price deviation.

## Features

- **Background Job**: Fetches price, market cap, and 24-hour change data for selected cryptocurrencies every 2 hours using the CoinGecko API.
- **Endpoints**:
  - `/stats`: Retrieve the latest price, market cap, and 24-hour price change for a specific cryptocurrency.
  - `/deviation`: Calculate and return the standard deviation of the past 100 price records for a specific cryptocurrency.
- **Data Storage**: MongoDB is used to store cryptocurrency stats.

## Technologies Used

- **Node.js** and **Express** for the server-side application.
- **MongoDB** for database storage.
- **CoinGecko API** for fetching cryptocurrency data.
- **node-cron** for scheduling periodic data fetches.

## Installation

1. Clone this repository.
2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and set the following environment variables:

    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    ```

4. Run the application:

    ```bash
    npm start
    ```

## Usage

- **GET** `/stats?coin=<coin_id>`: Returns the latest stats for Bitcoin (`bitcoin`), Ethereum (`ethereum`), or Matic (`matic-network`).

- **GET** `/deviation?coin=<coin_id>`: Returns the standard deviation of the price over the last 100 records.
