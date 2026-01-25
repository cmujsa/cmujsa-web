// EDIT THE FOLLOWING TWO VARIABLES WHEN A NEW EXEC BOARD IS ELECTED
const mainContactName = "Soma Narita"; // Will be used in FAQ
const mainContactAndrewID = "snarita"; // Will be used in FAQ and footer

// DON'T EDIT THIS
class ExecMember{
    constructor(firstName, lastName, position, pronouns, monthJoined, andrewID, imageUploaded) {
        this.firstName = firstName; // (e.g. "Andrew")
        this.lastName = lastName; // (e.g. "Carnegie")
        this.position = position; // (e.g. "Fundraising Co-Chair")
        this.pronouns = pronouns; // (e.g. "she/her", "he/him")
        this.monthJoined = monthJoined; // Month exec member joined JSA (e.g. "Sept 2023")
        this.andrewID = andrewID; // Andrew ID of exec member (e.g. "acarnegie")
        this.imageUploaded = imageUploaded; // Set to true if an image of the exec member has been uploaded as "members/andrewID.png"
    }
}
const execMembers = [];

// ADD/REMOVE EXEC MEMBERS BELOW
execMembers.push(new ExecMember(
    "Soma",
    "Narita",
    "Co-President",
    "he/him",
    "Sept 2024",
    "snarita",
    true
));
execMembers.push(new ExecMember(
    "Koharu",
    "Matsuki",
    "Co-President",
    "she/her",
    "Sept 2023",
    "kmatsuki",
    true
));
execMembers.push(new ExecMember(
    "May", 
    "Sonoda",
    "Cultural Chair",
    "he/him",
    "Sept 2023",
    "maysonod",
    true
));
execMembers.push(new ExecMember(
    "Mia",
    "Manton",
    "Vice President",
    "she/her",
    "Sept 2024",
    "mmanton",
    true
));
execMembers.push(new ExecMember(
    "Taiga",
    "Nishida",
    "Fundraising Co-Chair",
    "he/him",
    "Sept 2024",
    "tnishida",
    true
));
execMembers.push(new ExecMember(
    "Harrison", 
    "Lee",
    "Fundraising Co-Chair", 
    "he/him", 
    "Sept 2024", 
    "harrisol", 
    true
));
execMembers.push(new ExecMember(
    "MyAnh", 
    "Hisaeda", 
    "Design Chair", 
    "she/her", 
    "Sept 2024", 
    "mhisaeda", 
    true
));


// DON'T EDIT BELOW
const currentYear = new Date().getFullYear();
Array.from(document.getElementsByClassName("main-contact-name")).forEach(function (element) {
    element.innerHTML = mainContactName;
});
Array.from(document.getElementsByClassName("main-contact-andrewID")).forEach(function (element) {
    element.innerHTML = mainContactAndrewID + "@andrew.cmu.edu";
    element.href = "mailto:" + mainContactAndrewID + "+jsa@andrew.cmu.edu";
});
