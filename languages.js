var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var item in languages) {
    var foo = typeof languages[item]
    if (foo === 'string'){
        console.log(languages[item])
    }
}
