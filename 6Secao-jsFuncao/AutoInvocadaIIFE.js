// Foge do escopo global

// IIFE -> Immediately Invoked Function Expression

// A função deve ser declarada entre ()
(function() {
    console.log("Sera executado na hora")
    console.log("Foge do escopo mais abrangente!")
})() // () -> é onde chamo a funcao