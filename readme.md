# RabbitMQ Messaging System

This project demonstrates a simple messaging system using RabbitMQ in Node.js. It includes producer and consumer scripts for sending and receiving messages.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Project Overview

This project includes the following scripts:

- `producer.js`: Sends messages to a RabbitMQ exchange.
- `consumer.js`: Consumes messages from a RabbitMQ queue.
- `producer2.js`: Another producer script with similar functionality to `producer.js`.
- `consumer2.js`: Another consumer script that listens to two different queues.

## Prerequisites

To run this project, you'll need to have the following installed:

- [Node.js](https://nodejs.org/) (version 12.x or later)
- [Docker](https://www.docker.com/) (for RabbitMQ setup)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jatinmotwani/rabbitmq-message-system
   cd rabbitmq-node-project
   ```

2. **Install Node.js dependencies:**

   ```
   npm install
   ```

3. **Set up RabbitMQ using Docker:**
   ```
   docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management
   ```
   This command will pull the RabbitMQ image from Docker Hub and run it. The management console will be accessible at http://localhost:15672 with the default credentials (guest / guest).

## Usage

1. **Start the RabbitMQ server:**
   Make sure RabbitMQ is running. You can check this by accessing the management console at http://localhost:15672.

2. **Run the producer script:**

   ```
   node producer.js
   ```

   This will send a predefined email message to the mail_exchange exchange.

3. **Run the consumer script:**

   ```
   node consumer.js
   ```

   This will start listening for messages from the mail_queue queue and log the message content to the console.

4. **Run the second producer script:**

   ```
   node producer2.js
   ```

   This will send another predefined email message to the mail_exchange exchange.

5. **Run the second consumer script:**

   ```
   node consumer2.js
   ```

   This will start listening for messages from both subscribed_users_mail_queue and users_mail_queue queues and log the message content to the console.

## Project Structure

```
 rabbitmq-node-project/
 ├── consumer.js
 ├── consumer2.js
 ├── package.json
 ├── producer.js
 ├── producer2.js
 └── README.md
```

## License

This project is licensed under the ISC License.
Feel free to copy this content into your `README.md` file.
