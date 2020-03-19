module.exports = [
    {
        regex: /^ping$/,
        script: require('./ping'),
    },
    {
        regex: /^embed$/,
        script: require('./embed'),
    },
]