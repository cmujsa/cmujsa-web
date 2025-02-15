ExecMember.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

// function copyEmail(andrewID) {
//     if (navigator.clipboard) {
//         navigator.clipboard.writeText(andrewID + "+jsa@andrew.cmu.edu")
//         .then(() => {
//             console.log('Text copied to clipboard:', andrewID);
//         })
//         .catch(err => {
//             console.error('Failed to copy text:', err);
//         });
//     }
// }

ExecMember.prototype.execCard = function () {
    return `
        <div class="col">
            <div class="member-card">
                <img class="w-100 member-photo" src="images/members/${this.imageUploaded ? this.andrewID : "blank"}.png" alt="Photo of ${this.fullName()}">
                <h4 class="member-name">
                    ${this.fullName()}
                </h4>
                <p class="member-desc">
                    ${this.position}<br>
                    (${this.pronouns})<br>
                    Member Since ${this.monthJoined}<br>
                    <a class="member-email" href="mailto:${this.andrewID}+jsa@andrew.cmu.edu"> 
                        ${this.andrewID}@andrew.cmu.edu
                    </a>
                </p>
            </div>
        </div>
    `
}

let htmlText = "";

function addExecMember(exec) {
    htmlText += exec.execCard();
}

execMembers.forEach(addExecMember);

document.getElementById("exec-cards").innerHTML = htmlText;

// Attempt at copy email tooltip that doesn't work

{/* <button class="member-email email-tooltip" onClick="() => copyEmail(${this.andrewID})"> 
${this.andrewID}@andrew.cmu.edu
<span class="email-tooltiptext">Copy to clipboard</span>
</button> */}