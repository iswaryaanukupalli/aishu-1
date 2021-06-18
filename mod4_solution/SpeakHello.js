((window) => {

    const helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = (name) => console.log(`${speakWord} ${name}`);

    window.helloSpeaker = helloSpeaker;
    
})(window);
