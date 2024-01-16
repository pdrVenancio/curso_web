const mediaAluno = obj => {
    let alunos = []
    Object.entries(obj).forEach(([chave, valor]) => {   
        const aluno = {
            nome : chave,
            media : valor.reduce((acum, atua) => acum += atua) / valor.length
        }
        
        alunos.push(aluno)
    })

    let bestAluno = {
        nome: "",
        media: 0
    };

    for (const aluno of alunos) {
        if (aluno.media > bestAluno.media) {
            bestAluno = aluno;
        }
    }

    return bestAluno;
}

console.log(mediaAluno({
    joa: [8, 7.6, 8.9, 6],
    maria: [9, 6.6, 7.9, 8],
    carla: [7, 7, 8, 9]
}))