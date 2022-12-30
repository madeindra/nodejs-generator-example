// import dependencies
import { createServer } from 'node:http';
import { once } from 'node:events';

// config
const PORT = 3002;

// handler
async function handler(req, res) {
  if (req.method === 'POST' && req.url.startsWith('/cart')) {
    const data = await once(req, 'data');
    const item = JSON.parse(data);
    console.log('received', item);

    return res.end(`Process was successful for ${item.id}`);
  }

  return res.end('Hello World!');
}

// create server
createServer(handler).listen(PORT).on('listening', () => {
  console.log(`Server listening on port ${PORT}`);
});