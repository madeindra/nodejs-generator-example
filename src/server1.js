// import dependencies
import { createServer } from 'node:http';
import { parse } from 'node:url';
import { randomUUID } from 'node:crypto';

// config
const PORT = 3001;

// handler
async function handler(req, res) {
  if (req.method === 'GET' && req.url.startsWith('/products')) {
    const { query: { name } }  = parse(req.url, true);
    
    const item = {
      id: randomUUID(),
      product: name,
    }

    return res.end(JSON.stringify(item));
  }

  return res.end('Hello World!');
}

// create server
createServer(handler).listen(PORT).on('listening', () => {
  console.log(`Server listening on port ${PORT}`);
});