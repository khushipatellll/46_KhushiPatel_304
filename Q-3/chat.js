function getReply(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes('hello') || userInput.includes('h1')){
        return 'Hello ! how can i assist you today?';
    }
    if (userInput.includes('how are you?')) {
        return 'I am fine . What about you?';
    } 
    if (userInput.includes('bye') || userInput.includes('exit')) {
        return 'Good bye ! have a greate day';
    }
    return "sorry, i don't understand that"
}
module.exports = getReply;