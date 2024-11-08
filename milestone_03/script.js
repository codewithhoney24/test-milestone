// Selecting form and output elements
var resumeOutput = document.getElementById("resumeOutput");
// Handling profile picture display
var profilePictureInput = document.getElementById("imageInput");
var imgPreview = document.querySelector(".img-pic");
profilePictureInput.addEventListener("change", function (event) {
    var target = event.target;
    if (target.files && target.files[0]) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            imgPreview.src = reader_1.result;
        };
        reader_1.readAsDataURL(target.files[0]);
    }
});
// Function to generate and display resume
function generateResume(event) {
    var _a;
    event.preventDefault();
    // Collecting input values
    var name = document.getElementById("name").value;
    var cnic = document.getElementById("cnic").value;
    var residence = document.getElementById("residence").value;
    var dob = document.getElementById("dob").value;
    var contact = document.getElementById("contact").value;
    var gender = (_a = document.querySelector('input[name="gender"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    var email = document.getElementById("email").value;
    var objective = document.getElementById("objective").value;
    var certifications = document.getElementById("certifications").value;
    var frontendTechnologies = document.getElementById("frontendTechnologies").value;
    var problemSolving = document.getElementById("problemSolving").value;
    var softSkills = document.getElementById("softSkills").value;
    var designPrototyping = document.getElementById("designPrototyping").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var projectsDetails = document.getElementById("projectsDetails").value;
    var hobbies = document.getElementById("hobbies").value;
    // Check for required fields (simple validation)
    if (!name || !cnic || !residence || !dob || !contact || !gender || !email) {
        alert("Please fill in all the required fields.");
        return;
    }
    // Creating HTML for dynamic resume display
    var resumeHTML = "\n    <h1>Dynamic Resume</h1><b>\n     <img src=\"".concat(imgPreview.src, "\" alt=\"Profile Picture\" class=\"img-pic\">\n\n        <h2>Personal Information</h2>\n        <p><strong>Name:</strong> ").concat(name, "</p> \n        <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n        <p><strong>Residence:</strong> ").concat(residence, "</p>\n        <p><strong>Date of Birth:</strong> ").concat(dob, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n        <p><strong>Gender:</strong> ").concat(gender, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Objective:</strong> ").concat(objective, "</p>\n        <p><strong>Certifications:</strong> ").concat(certifications, "</p>\n        <p><strong>Frontend Technologies:</strong> ").concat(frontendTechnologies, "</p>\n        <p><strong>Problem Solving:</strong> ").concat(problemSolving, "</p>\n        <p><strong>Soft Skills:</strong> ").concat(softSkills, "</p>\n        <p><strong>Design & Prototyping:</strong> ").concat(designPrototyping, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Work Experience:</strong> ").concat(workExperience, "</p>\n        <p><strong>Projects:</strong> ").concat(projectsDetails, "</p>\n        <p><strong>Hobbies:</strong> ").concat(hobbies, "</p>\n    ");
    // Displaying the generated resume
    resumeOutput.innerHTML = resumeHTML;
}
