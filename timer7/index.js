module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    context.log(`A função timer7 correu às: ${timeStamp}`);
};
