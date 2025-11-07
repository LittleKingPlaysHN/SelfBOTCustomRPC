const { Client, RichPresence } = require('discord.js-selfbot-v13');

// NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS!
const CONFIG = {
    TOKEN: 'token aqui',
    
    BUTTONS: {
        gunslol: 'https://myuser.gg/clarents',
        supreme: 'https://discord.gg/AEq3U5hpFB'
    },
    
    STATUS_MESSAGES: [
        '404',
        '$$$',
        '@clarents',
        '$$$',
        '@overclock',
        '$$$',
        '404',
    ],
    
    CHANGE_INTERVAL: 5000
};

// NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS!
const client = new Client();
let currentStatusIndex = 0;

function setRichPresence() {
    const currentStatus = CONFIG.STATUS_MESSAGES[currentStatusIndex];
    
// NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS!
    try {
        const rpc = new RichPresence(client)
            .setApplicationId('1280786278685872149')
            .setType('STREAMING')
            .setURL('https://twitch.tv/littlekingplays')
            .setName('404 No Found')
            .setDetails(currentStatus)
            .setState('$Money$')
            .setStartTimestamp(Date.now())
            .addButton('MyUser', CONFIG.BUTTONS.gunslol)
            .addButton('MyDiscord', CONFIG.BUTTONS.supreme)
           
        client.user.setPresence({
            activities: [rpc],
            status: 'dnd'
        });
        
        // NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS!
        console.log(`Estado Actualizado A: ${currentStatus}`);
    } catch (error) {
        console.error('Error No Se Pudo Completar El Estado', error.message);
    }

    currentStatusIndex = (currentStatusIndex + 1) % CONFIG.STATUS_MESSAGES.length;
}

// NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS!
client.on('ready', async () => {
    console.log(`SelfBOT Activo Correctamente: ${client.user.tag}`);
    console.log(`Modo Activo: Streaming`);
    console.log(`Cambio De Estado Cada ${CONFIG.CHANGE_INTERVAL/1000} Segundos`);
    
   // NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS! 
    setTimeout(() => {
        setRichPresence();
        console.log('Estado Custom Activado Correctamente');
        
        
        setInterval(() => {
            setRichPresence();
        }, CONFIG.CHANGE_INTERVAL);
    }, 2000);
});

// NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS!
client.on('error', (error) => {
    console.error('Ups Acaba De Registrarse Un Error', error);
});

// NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS!
console.log('Iniciando SelfBOT... (Powered By Clarents/Samux - Créditos a Pan$i)');
client.login(CONFIG.TOKEN).catch(error => {
    console.error('error de login:', error);
    console.log('Error Verifique Que Su Token Sea El Correcto....');
});

// NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS!
process.on('SIGINT', () => {
    console.log('\apagando SelfBOT...');
    client.destroy();
    process.exit(0);
});