const customExpress = require('./config/customExpress')
const connection = require('./infraestrutura/connection')
const tables = require('./infraestrutura/tables')
connection.connect(erro => {
    if (erro){
        console.log(erro)
    } else{
        console.log('Conectado com sucesso')

        tables.init(connection)

        const app = customExpress()
        app.listen(3000, () => console.log('Servidor conectado na porta 3000'))
    }
})



