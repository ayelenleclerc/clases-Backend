const express = require('express');
const { engine } = requiere('express-handlebars');
const path = require('path');
const PORT = 8080;

const app = express();

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.resolve(__dirname, '/views/layouts'),
    partialsDir: path.resolve(__dirname, '/views/partials'),
}))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    }
);
