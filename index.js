const Discord = require('discord.js')
const client = new Discord.Client()
const { botToken } = require('./config.json')
const modules = require('./modules')

const prefix = /^!/

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
    if (prefix.test(message.content)) {
        if (message.author.bot) return

        const content = message.content.replace(prefix, '')

        // const { abc } = { abc: 'def' }
        // const [ abc ] = [ 'def' ]

        const [command, ...args] = content.split(' ')

        console.log(command, args)

        for ( const { regex, script } of modules ) {
            if (regex.test(command)) {
                script({ message, content, command, args })
            }
        }
    }
})

client.login(botToken)
