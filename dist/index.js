"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = __importDefault(require("./config"));
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.GuildMembers,
    ],
    partials: [discord_js_1.Partials.Message, discord_js_1.Partials.Channel, discord_js_1.Partials.User, discord_js_1.Partials.GuildMember, discord_js_1.Partials.Reaction]
});
client.on('ready', (client) => {
    console.log(`${client.user.displayName} is ready`);
});
client.on('messageCreate', (message) => {
    var _a;
    if (((_a = message.guild) === null || _a === void 0 ? void 0 : _a.id) != config_1.default.senderGuildId)
        return;
    if (!message.channel.isTextBased())
        return;
    let id = message.channel.id;
    let allchannels = config_1.default.mapping[id];
    if (!allchannels)
        return;
    allchannels.forEach((id) => {
        try {
            const channel = client.channels.cache.get(id);
            if (!channel)
                return;
            if (!(channel === null || channel === void 0 ? void 0 : channel.isTextBased()))
                return;
            if (message.content) {
                channel.send({
                    content: message.content.replace(/<@&\d+>/g, '')
                });
                console.log(channel.url);
                console.log(`Message Sent : ${message.channel.id} to ${channel.id}`);
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
        }
        catch (e) {
            console.log(e);
        }
    });
});
client.login(config_1.default.token);
