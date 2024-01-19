import { Client, GatewayIntentBits, Partials } from "discord.js";
import config from './config'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
    ],
    partials: [Partials.Message, Partials.Channel, Partials.User, Partials.GuildMember, Partials.Reaction]
})



client.on('ready', (client) => {
    console.log(`${client.user.displayName} is ready`)
})


client.on('messageCreate', (message) => {

    if (message.guild?.id != config.senderGuildId) return;
    if (!message.channel.isTextBased()) return;

    let id: string = message.channel.id;
    let allchannels = config.mapping[id];
    if (!allchannels) return;

    allchannels.forEach((id: string) => {
        try {
            const channel = client.channels.cache.get(id);
            if (!channel) return;
            if (!channel?.isTextBased()) return;
            if (message.content) {
                channel.send({
                    content: message.content.replace(/<@&\d+>/g, '')
                })
                console.log(channel.url)
                console.log(`Message Sent : ${message.channel.id} to ${channel.id}`)
            }
            if (message.attachments.first() != undefined) {
                const attachment = message.attachments.first();
                if (attachment) {
                    channel.send({
                        files: [attachment.url],
                    });
                    if (message.embeds.length > 0) {
                        channel.send({
                            embeds: [...message.embeds],
                        });
                    }
                }
            }
            //                  client.channels.cache.get(channel).send('<@&804789597460365319>')
        } catch (e) {
            console.log(e);
        }
    })


})

client.login(config.token)