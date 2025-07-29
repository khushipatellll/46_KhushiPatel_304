const readline = require('readline');
const getReply = require('./chat');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {
    rl.question('You: ', (answer) => {
        const response = getReply(answer);
        console.log('Bot: ', response);

        if (answer.toLowerCase().includes('bye') || answer.toLowerCase().includes('exit')){
            rl.close();
        } else {
            askQuestion();
        }
            
    })
    
}

console.log('chatbot started. type your message below:');
askQuestion();
