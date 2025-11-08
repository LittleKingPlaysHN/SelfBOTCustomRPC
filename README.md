## Powered By Clarents/Samux - Créditos a Pan$i

- Discord: https://discord.gg/supremecm
- Editado Por: https://myuser.gg/clarents


## | Valor       | Lo que aparece en Discord   |
| ----------- | ------------------------------ |
| `PLAYING`   | Jugando a …                    | (Salen Los Botones)
| `STREAMING` | Transmitiendo … (requiere URL) | (No Salen Los Botones)
| `LISTENING` | Escuchando a …                 | (Salen Los Botones)
| `WATCHING`  | Viendo …                       | (Salen Los Botones)
| `COMPETING` | Compitiendo en …               | (Salen Los Botones)

## Nota Si Cambias La Actividad A Otra:

- STREAMING necesita URL de Twitch para que Discord lo reconozca como transmisión.
- Los botones, detalles y estado siguen funcionando igual.
- details y state son textos personalizados que aparecen debajo de la actividad principal.

## Ejemplo: 

- Antes: .setType('STREAMING') Trasmitiendo... (sin Botones) Solo Link Twich
- Ahora: .setType('WATCHING') = Viendo... (Con Botones Con Links)

## Como Cambiar El Tiempo De Juego:


- Remplazar Esta Parte:

function setRichPresence() {
    const currentStatus = CONFIG.STATUS_MESSAGES[currentStatusIndex];
// Agregamos Esto 600 = 10 Horas (Pueden Perzonalizlo)
    const oneHourAgo = Date.now() - (600 * 60 * 1000);
    
- Remplazamos .setStartTimestamp(Date.now()) 
- Por: .setStartTimestamp(oneHourAgo)
