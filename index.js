module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    context.log(`Função timer7 executada às: ${timeStamp}`);
};

