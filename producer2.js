const amqp = require('amqplib');

async function sendMail() {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const exchange = 'mail_exchange';
    const routingKey = 'send_mail_to_subscribed_users';
    const secondRoutingKey = 'send_mail_to_users';

    const message = {
      to: 'abbgfsndkvndsc@gmail.com',
      from: 'harsh@gmail.com',
      subject: 'Thank you',
      body: 'Hello ABC!',
    };

    const message2 = {
      to: 'testerpromax@gmail.com',
      from: 'hello@gmail.com',
      subject: 'Thank you',
      body: 'Hello ABC!',
    };

    await channel.assertExchange(exchange, 'direct', { durable: false });
    await channel.assertQueue('subscribed_users_mail_queue', {
      durable: false,
    });
    await channel.assertQueue('users_mail_queue', { durable: false });

    await channel.bindQueue(
      'subscribed_users_mail_queue',
      exchange,
      routingKey
    );
    await channel.bindQueue('users_mail_queue', exchange, secondRoutingKey);

    channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)));
    channel.publish(
      exchange,
      secondRoutingKey,
      Buffer.from(JSON.stringify(message2))
    );
    console.log(`Mail data was sent to ${routingKey}`, message);
    console.log(`Mail data was sent to ${secondRoutingKey}`, message2);

    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.log(error);
  }
}

sendMail();
