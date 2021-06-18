(() => {

    const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    names.forEach(name => {
        name[0].toLowerCase() === 'j' ? byeSpeaker.speak(name) : helloSpeaker.speak(name);
    });

})();
