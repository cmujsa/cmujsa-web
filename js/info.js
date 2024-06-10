// EDIT THE FOLLOWING TWO VARIABLES WHEN A NEW BOARD IS ELECTED

const mainContactName = "May Sonoda";
const mainContactAndrewID = "maysonod";

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
    "Alison", 
    "Zheng",
    "Co-President",
    "any pronouns",
    "Sept 2022",
    "agzheng",
    true
));
execMembers.push(new ExecMember(
    "Joseph",
    "Hsu",
    "Co-President",
    "he/him",
    "Sept 2020",
    "josephhs",
    true
));
execMembers.push(new ExecMember(
    "Stephen",
    "Chien",
    "Vice President of Internal Affairs",
    "he/him",
    "Sept 2022",
    "shchien",
    true
));
execMembers.push(new ExecMember(
    "Hanna",
    "Luo",
    "Design Chair",
    "she/her",
    "Sept 2020",
    "yihanl",
    true
));
execMembers.push(new ExecMember(
    "Stanley",
    "Duong",
    "Fundraising Co-Chair",
    "he/him",
    "Sept 2022",
    "slduong",
    true
));
execMembers.push(new ExecMember(
    "Nami", 
    "Numoto",
    "Fundraising Co-Chair", 
    "she/her", 
    "Sept 2021", 
    "mnumoto", 
    true
));
execMembers.push(new ExecMember(
    "Dillon", 
    "Shelton", 
    "Cultural Co-Chair", 
    "he/him", 
    "Sept 2023", 
    "dillonsh", 
    true
));
execMembers.push(new ExecMember(
    "May", 
    "Sonoda", 
    "Cultural Co-Chair", 
    "he/him", 
    "Sept 2023", 
    "maysonod", 
    true
));


// DON'T MODIFY BELOW
const currentYear = new Date().getFullYear();
Array.from(document.getElementsByClassName("mainContactName")).forEach(function (element) {
    element.innerHTML = mainContactName;
});
Array.from(document.getElementsByClassName("mainContactAndrewID")).forEach(function (element) {
    element.innerHTML = mainContactAndrewID + "@andrew.cmu.edu";
    element.href = "mailto:" + mainContactAndrewID + "+jsa@andrew.cmu.edu";
});