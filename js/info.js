// EDIT THE FOLLOWING TWO VARIABLES WHEN A NEW EXEC BOARD IS ELECTED
const mainContactName = "May Sonoda"; // Will be used in FAQ
const mainContactAndrewID = "maysonod"; // Will be used in FAQ and footer

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
    "May", 
    "Sonoda",
    "President",
    "he/him",
    "Sept 2023",
    "maysonod",
    true
));
execMembers.push(new ExecMember(
    "Koharu",
    "Matsuki",
    "Vice President of Internal Affairs",
    "she/her",
    "Sept 2023",
    "kmatsuki",
    true
));
execMembers.push(new ExecMember(
    "Nami",
    "Numoto",
    "Vice President of External Affairs",
    "she/her",
    "Sept 2021",
    "mnumoto",
    true
));
execMembers.push(new ExecMember(
    "Sulli",
    "Yatabe",
    "Design Chair",
    "she/her",
    "Sept 2022",
    "eyatabe",
    false
));
execMembers.push(new ExecMember(
    "Richard",
    "Sbaschnig",
    "Cultural Chair",
    "he/him",
    "Sept 2022",
    "rsbaschn",
    true
));
execMembers.push(new ExecMember(
    "Tzen-Chuen", 
    "Ng",
    "Fundraising Co-Chair", 
    "he/him", 
    "Sept 2023", 
    "tzenchun", 
    true
));
execMembers.push(new ExecMember(
    "Taiyo", 
    "De Jong", 
    "Fundraising Co-Chair", 
    "he/him", 
    "Sept 2021", 
    "tdejong", 
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