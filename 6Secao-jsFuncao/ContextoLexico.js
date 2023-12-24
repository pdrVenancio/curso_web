const valor = 'global'

function minhaFunc (){
    console.log(valor)
}

function exec() {
    const valor = "local"
    minhaFunc()
}

exec()