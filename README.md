# [Lil Kha Bot Discord.js](https://github.com/Lil-Salty-cpu/bot3) 

# **Guide d'installation **

## Obternir ces identifiants:
* Aller sur le [Discord Developer Portal](https://discordapp.com/developers/applications/)
* Creer une nouvelle application.
* Aller sur l'onglet bot et creer un bot.
### Token
Le token est utilisé pour se connecter
* Cliquez sur "copiez" a l'endroit ou il est marquer "token"
* Une fois copier, coller le sur le config.json

 ### Your discord ID
 * Active le mode developpeur dans l'onglet "Apparence" dans tes parametres de compte Discord
 * Envoie un message, clique droit sur ton pseudo, puis copier l'identifiant
 * Coller l'identifiant dans le fichier config.json.
 
 * If you followed the stepts correctly the config.json file should now look like this:
  ```js 
  {
  "token": "UHIU_75858kughG",
  "prefix": ".",
  "devID": "8239462"
   }
  ```
  * Tu dois sauvegarder le fichier config.json

## Comment installer:
1. Installe node.js sur https://nodejs.org et la dernière version de Python
2. 
3. Once everything has installed run **start.bat** .
4. Wait for everything to load and the bot should now be up and running.

If you want the node_modules folder to be pre installed instead of running install.bat, go to the [Release page and download the latest zip file](https://github.com/Aaronidk/Dorito-bot-discord.js/releases) 


# Well Done!
You now have a self hosted working bot on your server!

# Self Hosting: (optional)
If you want more reliable hosting without having it run on your main pc or on your home network, I recommend buying a web server.
The bot can be ran on Linux and Windows.

# Linux Install:
1. Download nodejs
2. Download the bot from the release page.
3. Use the terminal to navigate to the bot folder location where the index is located (dorito.js or index.js)
4. Type npm install
5. To start the bot make sure you're terminal is still navigated to the bot folder then type " node . " or "node index.js " or " node dorito.js "
6. I recommend learning how the terminal works as well as entering directories using cd in the terminal.

# Troubleshooting
If the music commands do not work then it is because FFMPEG was not installed.
You can find many videos on Youtube showing how to install FFMPEG.
Here is one for [Windows](https://www.youtube.com/watch?v=qjtmgCb8NcE)
or you can try type this in the terminal for Linux " npm i ffmpeg "

# API Keys (optional)
* The bot needs an Osu api key so get one and go into the "/commands/utility/" folder and find osu.js.
* Once in the osu.js file you should see text telling you where to paste your api key.
* Now that you finished setting the API key save the the file and run the bot. The osu command should now work.
* If you don't care about the osu command or you don't want to get an api key go into the "/commands/utility/" folder and delete the osu.js command. 

> This Bot was made by [Aaronidk/aaronokiay]().
