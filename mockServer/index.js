const contacts = require("./contacts");
const filters = require("./filters");
const folders = require("./folders");
const settings = require("./settings");

// The below will add all files in the given directory to an array.
// This will need to be reworked, but will suffice for demo purposes.
const messagePath = require("path").join(__dirname, "messages");
const foldersPath = require("path").join(__dirname, "folders");

const messages = require("fs")
    .readdirSync(messagePath)
    .map((message) => require(`./messages/${message}`));

const _folders = require("fs")
    .readdirSync(foldersPath)
    .reduce((folders, folder) => {
        return folders.concat({
            id: folder.replace('.js', ''),
            emails: require(`./folders/${folder}`)
        })
    }, []);

module.exports = () => {

    return {
        contacts,
        filters,
        // Due to the nature of json-server package, we these different payloads
        // need to be at separate endpoints.
        folders,
        _folders,
        settings,
        messages
    };
};
