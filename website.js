const http = require('http');
const fs = require('fs');

const server = http.createServer((req, resp) => {

    // HOME
    if (req.url === '/') {

        fs.readFile('html/header.html', 'utf-8', (error, headerData) => {

            if (error) {
                resp.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                resp.end('Header not found');
                return;
            }

            fs.readFile('html/home.html', 'utf-8', (error, homeData) => {

                if (error) {
                    resp.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });

                    resp.end('Home not found');
                    return;
                }

                resp.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                resp.write(headerData);
                resp.write(homeData);
                resp.end();
            });
        });

    }

    // ABOUT
    else if (req.url === '/about') {

        fs.readFile('html/header.html', 'utf-8', (error, headerData) => {

            if (error) {
                resp.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                resp.end('Header not found');
                return;
            }

            fs.readFile('html/about.html', 'utf-8', (error, aboutData) => {

                if (error) {
                    resp.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });

                    resp.end('About not found');
                    return;
                }

                resp.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                resp.write(headerData);
                resp.write(aboutData);
                resp.end();
            });
        });

    }

    // SERVICE
    else if (req.url === '/service') {

        fs.readFile('html/header.html', 'utf-8', (error, headerData) => {

            if (error) {
                resp.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                resp.end('Header not found');
                return;
            }

            fs.readFile('html/service.html', 'utf-8', (error, serviceData) => {

                if (error) {
                    resp.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });

                    resp.end('Service not found');
                    return;
                }

                resp.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                resp.write(headerData);
                resp.write(serviceData);
                resp.end();
            });
        });

    }

    // CONTACT
    else if (req.url === '/contact') {

        fs.readFile('html/header.html', 'utf-8', (error, headerData) => {

            if (error) {
                resp.writeHead(500, {
                    'Content-Type': 'text/plain'
                });

                resp.end('Header not found');
                return;
            }

            fs.readFile('html/contact.html', 'utf-8', (error, contactData) => {

                if (error) {
                    resp.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });

                    resp.end('Contact not found');
                    return;
                }

                resp.writeHead(200, {
                    'Content-Type': 'text/html'
                });

                resp.write(headerData);
                resp.write(contactData);
                resp.end();
            });
        });

    }

    // CSS
    else if (req.url === '/style.css') {

        fs.readFile('html/style.css', 'utf-8', (error, data) => {

            if (error) {
                resp.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                resp.end('CSS not found');
                return;
            }

            resp.writeHead(200, {
                'Content-Type': 'text/css'
            });

            resp.end(data);
        });

    }

    // PAGE NOT FOUND
    else {

        resp.writeHead(404, {
            'Content-Type': 'text/html'
        });

        resp.end(`
            <h1>404 - Page Not Found</h1>
            <p>Requested URL: ${req.url}</p>
        `);
    }

});

server.listen(3200, () => {
    console.log('Server running at http://localhost:3200');
});