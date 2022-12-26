import { DATA } from "../../index.js";

const showUsername = () => {
    // console.log(os.userInfo().username);
    process.stdout.write(`User name: ${DATA["username"]}\n`);
}

export default showUsername;