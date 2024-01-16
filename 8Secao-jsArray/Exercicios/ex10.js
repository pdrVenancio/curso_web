const addStr = (n) => {
    str = ''
    for(let i = 0; i < n; i++)
        str = str.concat('+')
    return str
}

console.log(addStr(5))