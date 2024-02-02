# we can make dist of frotend
    1. npm run build
    2. copy and paste to backend
    3. use static file serving middleware app.use(express.static('dist'));
    4. whenever express gets an HTTP GET request it will first check if the dist
        directory contains a file corresponding to the request's address. If a correct
        file is found, express will return it.