// npm i node-schedule

const schedule = require('node-schedule')

// ( quanto en quanto tempo | qual minuto | qual hora | dia do mes | mes | dia da semana)
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function(){
    console.log('Executando Tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Exec tarefa 2', new Date().getSeconds())
})
