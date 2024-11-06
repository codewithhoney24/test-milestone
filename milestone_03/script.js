var form = document.getElementById("resume-container");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener('submit', function (event) {
    var _a, _b;
    event.preventDefault(); // Prevent form submission
    // Get all form elements
    var name = document.getElementById("name").value;
    var cnic = document.getElementById("cnic").value;
    var residence = document.getElementById("residence").value;
    var dob = document.getElementById("dob").value;
    var contact = document.getElementById("contact").value;
    var gender = (_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var careerObjective = document.getElementById("objective").value;
    var certifications = document.getElementById("certifications").value;
    var frontendTechnologies = document.getElementById("frontendTechnologies").value;
    var problemSolving = document.getElementById("problemSolving").value;
    var softSkills = document.getElementById("softSkills").value;
    var designPrototyping = document.getElementById("designPrototyping").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var projects = document.getElementById("projectsDetails").value;
    var hobbiesContent = document.getElementById("hobbies").value;
    var profilePictureInput = document.getElementById("profilePicture");
    var profilePictureFile = (_b = profilePictureInput.files) === null || _b === void 0 ? void 0 : _b[0];
    // Basic resume content HTML
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>CNIC:</b> ").concat(cnic, "</p>\n    <p><b>Residence:</b> ").concat(residence, "</p>\n    <p><b>Date of Birth:</b> ").concat(dob, "</p>\n    <p><b>Contact No:</b> ").concat(contact, "</p>\n    <p><b>Gender:</b> ").concat(gender, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Address:</b> ").concat(address, "</p>\n\n    <h3><b>Career Objective</b></h3>\n    <p>").concat(careerObjective, "</p>\n\n    <h3><b>Certifications</b></h3>\n    <p>").concat(certifications, "</p>\n\n    <h3><b>Frontend Technologies</b></h3>\n    <p>").concat(frontendTechnologies, "</p>\n\n    <h3><b>Problem Solving</b></h3>\n    <p>").concat(problemSolving, "</p>\n\n    <h3><b>Soft Skills</b></h3>\n    <p>").concat(softSkills, "</p>\n\n    <h3><b>Design & Prototyping</b></h3>\n    <p>").concat(designPrototyping, "</p>\n\n    <h3><b>Education</b></h3>\n    <p>").concat(education, "</p>\n\n    <h3><b>Work Experience</b></h3>\n    <p>").concat(workExperience, "</p>\n\n    <h3><b>Projects</b></h3>\n    <p>").concat(projects, "</p>\n\n    <h3><b>Hobbies</b></h3>\n    <p>").concat(hobbiesContent, "</p>\n  ");
    if (profilePictureFile) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var profilePictureHTML = "<img src=\"".concat(reader_1.result, "\" alt=\"Profile Picture\" class=\"profilePicture\">");
            // Append profile picture to resume HTML
            resumeHTML = profilePictureHTML + resumeHTML;
            displayResume(resumeHTML);
        };
        reader_1.readAsDataURL(profilePictureFile);
    }
    else {
        // No profile picture, generate the resume immediately
        displayResume(resumeHTML);
    }
});
function displayResume(resumeHTML) {
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Failed to display resume");
    }
}
