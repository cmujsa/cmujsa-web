console.log("test");
ExecMember.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

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
    console.log(exec.fullName());
    htmlText += exec.execCard();
}

execMembers.forEach(addExecMember);

document.getElementById("execCards").innerHTML = htmlText;