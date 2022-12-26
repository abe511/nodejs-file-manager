
const exitProcess = (username, signal=null) => {
    const newline = signal ? "" : "\n";
    process.stdout.write(`Thank you for using File Manager, ${username}, goodbye!${newline}`);
    process.exit(0);
}

export default exitProcess;