var config = {};
module.exports = config;

/////////////////////
//  General config //
/////////////////////

// verbosity of console output
// possible options from most to least verbose:
// silly, debug, verbose, info, warn, error
config.logLevel = 'info';

// paste the bot API token you got from BotFather here:
config.tgToken = 'YOUR-BOT-TOKEN';

// send IRC topic changes to Telegram
config.sendTopic = true;

// send IRC joins, parts and quits to Telegram
config.sendNonMsg = false;

// enable HTTP server which hosts sent media files, links to files are
// forwarded to IRC
config.showMedia = false;

// Add some randomness to url when relaying media
// Use 0 to disable
config.mediaRandomLength = 8;

// Age in seconds after which a Telegram message is not relayed, this prevents
// spamming the IRC channel if your bot was offline for a long time
config.maxMsgAge = 60;

// HTTP server port
config.httpPort = 9090;

// HTTP server location, URLs are generated from this
config.httpLocation = 'http://mydomain.com' + ':' + config.httpPort;

// Whether to allow sending messages to IRC without nick prefix
config.allowCommands = false;

//////////////////
//  IRC config  //
//////////////////

// Colorizes nicks
config.nickcolor = true;

// Nick color palette
config.palette = [
    'white', 'silver', 'navy',
    'green', 'red', 'brown',
    'purple', 'olive', 'yellow',
    'lime', 'teal', 'cyan',
    'pink', 'blue'
];

// If soloUse is true, send all messages without username preview, intented
// to use telegram as a limited IRC client.
config.soloUse = false;

// formatting of Telegram usernames on IRC.
// the following placeholders are available:
//
// - %firstName% (first name of sender)
// - %lastName% (last name of sender)
// - %username% (optional Telegram username of sender)
config.nameFormat = '%username%';

// fallback format string for %username% if sender lacks username
config.usernameFallbackFormat = '%firstName% %lastName%';

// array of commands to send to IRC server as soon as we're connected,
// example: config.ircPerformCmds = [
//     'PRIVMSG Q@CServe.quakenet.org :AUTH <username> <password>'
// ]
config.ircPerformCmds = [];

// Here you configure which modules (e.g. IRC, Telegram) you wish to use,
// as well as options they may need in order to connect
config.modules = [{
  alias: 'freenode',
  module: 'irc',
  config: {
    host: 'irc.myserver.org',
    port: 6667,
    nick: 'tgBot',

    // Replace newlines with this string before relaying to IRC
    // If you *do* want newlines, just set this to '\n' (flood warning)
    replaceNewlines: ' … '
  }
}, {
  alias: 'telegram',
  module: 'telegram',
  config: {
    token: 'YOUR-BOT-API-TOKEN',
    polling: true
  }
}];

// Here you configure groups. Each room in a group will receive messages from
// all other rooms in the group.
config.groups = [{
  name: 'Test Group',
  rooms: [
    'freenode:#fruittest',
    'telegram:Fruits bot testing'
  ]
}];

// see https://node-irc.readthedocs.org/en/latest/API.html#client for
// documentation
config.ircOptions = {
    userName: 'bot',
    realName: 'Telegram IRC Bot',
    port: 6667,
    localAddress: null,
    showErrors: false,
    autoRejoin: false,
    autoConnect: true,
    channels: [], // auto generated, do not touch
    secure: false,
    selfSigned: false,
    certExpired: false,
    floodProtection: true,
    floodProtectionDelay: 1000,
    sasl: false,
    stripColors: true,
    channelPrefixes: '&#!',
    messageSplit: 512,
    encoding: ''
};

// the default hilight regexp will match lines containing the bot nick, or
// lines starting with '! '
var regex = '^ *(?:' + config.ircNick + '[:,]?|!) +(.*\\S.*)$';
config.hlRegexp = new RegExp(regex, 'i');

// if there was a match, should we only show the parenthesized substring match?
// with the default regexp this would hide the bot nickname in messages when
// highlighted
config.hlOnlyShowMatch = false;
