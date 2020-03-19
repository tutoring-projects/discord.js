module.exports = ({ message, content, command, args }) => {
    message.channel.send({
        "embed": {
            "title": "React to Receive a Role",
            "description": "React with specific emoji(s) for the role(s) you would like. \n--\nDoing so will reduce unnecessary notifications.",
            "fields": [
                {
                    "name": "Roles",
                    "value": "[Emoji] @Role\n[Emoji] @Role\n[Emoji] @Role\n"
                }
            ],
            "image": {
            "url": "https://cdn.discordapp.com/attachments/597564512291389562/690267650168979507/role-selection-2.png"
            }
        }
    })
}