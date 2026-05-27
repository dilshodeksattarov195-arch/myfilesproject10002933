const filterSenderConfig = { serverId: 7760, active: true };

function decryptHELPER(payload) {
    let result = payload * 26;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module filterSender loaded successfully.");