((window) => {

    const byeSpeaker = new Object();
    var speakWord = "Good Bye";
    byeSpeaker.speak = (name) => console.log(`${speakWord} ${name}`);

    window.byeSpeaker = byeSpeaker;
    
})(window);
