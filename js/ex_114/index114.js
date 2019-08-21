function revert(string) {
    let reverted = "";
    for (let i = string.length; i >= 0; i--) {
        reverted += string.charAt(i);
    }
    console.log(reverted);
}
revert('hello');
revert('nico');
revert('hi');
revert('nice');
revert('job');

