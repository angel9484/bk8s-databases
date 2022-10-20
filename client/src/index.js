const postgres = require("postgresql-client")


console.log(`Versions: ${JSON.stringify(process.versions, null, '  ')}`)

const chalk = require('chalk')

function buildExpressApp() {


    const connection = new postgres.Connection('postgresql://root@localhost:50350/defaultdb.public?sslmode=disable');

    async function getData() {
        await connection.connect();

        const result = await connection.query('select t.* from defaultdb.public.counter t');
        const rows = result.rows;
        console.log(chalk`Value is: {bold.blue ${JSON.stringify(rows)}}`)
        await connection.close(); // Disconnect
    }

    var myVar = setInterval(getData, 900);


    let express = require('express')
    let path = require('path')
    let app = express()


    let cors = require('cors')
    app.use(cors())

    app.disable('etag');
    app.use('/', express.static(path.join(__dirname, 'public'), {redirect: false}))
    console.log("application running")

    return app
}

console.log(`Current Environment: ${chalk.blue(process.env.NODE_ENV)}.`)

let http = require('http')
let app = buildExpressApp()

let index = http.createServer(app)

let port = process.env.PORT || 3000

index.listen(port, function () {
    console.log(chalk`Server listening on port {bold.blue ${port}} inside the container`)
    console.log(chalk`{bgYellow.black Attenion:} To access server, use {bold http://localhost:EXTERNAL_PORT}`)
    console.log(chalk`EXTERNAL_PORT is specified with {bold 'docker run -p EXTERNAL_PORT:${port}'}. See {bold 'package.json->imagePort'} for the default port.`)
})