'use strict';

const cluster = require('cluster');
const os = require('os');
const http = require('http');
const config = require('./config');
const app = require('./app');
const { connectDB } = require('./db/mongo');

const PORT = config.port;
const CPU_COUNT = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  console.log(`Forking ${CPU_COUNT} workers...\n`);

  for (let i = 0; i < CPU_COUNT; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(
      `Worker ${worker.process.pid} died (${signal || code}). Restarting...`
    );
    cluster.fork();
  });

} else {

  (async () => {
    await connectDB();

    const server = http.createServer(app);

    server.listen(PORT, (err) => {
      if (!err) {
        console.log(
          `Worker ${process.pid} listening on port ${PORT}`
        );
      }
    });

    const shutdown = () => {
      console.log(`Worker ${process.pid} shutting down...`);
      server.close(() => {
        process.exit(0);
      });
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
  })();
}
