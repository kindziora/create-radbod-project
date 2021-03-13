import express from 'express';
import path from 'path';
const __dirname = path.resolve();

async function run() {
  // create new express app and save it as "app"
  const app = express();

  // server configuration
  //node ./node_modules/kjs/server/run.js html_loader.js data_loader.js 8800 browser;../dist

  const PORT = parseInt(process.argv[2] || 8080);

  let { html_loader } = await import(process.argv[3]);
  //process.argv[2] ? await import(process.argv[2]) : false;
  //let { data_loader } = process.argv[3] ? await import(process.argv[3]) : false;

  let staticPath = (process.argv[5] || "public/build/dev");

  app.use(express.static(path.join(__dirname, staticPath)));

  if (typeof html_loader === "function") {
    app.use(html_loader);
  }

  // make the server listen to requests
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
  });
}
run();
