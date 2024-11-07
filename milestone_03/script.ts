// Selecting form and output elements with null checking
const resumeForm = document.getElementById("resume-container") as HTMLFormElement | null;
const resumeDisplaySection = document.getElementById("resume-display") as HTMLElement | null;
const resumeDisplayOutput = document.getElementById("resumeOutput") as HTMLElement | null;

if (!resumeForm) console.error("Form element with ID 'resume-container' not found.");
if (!resumeDisplaySection) console.error("Display section with ID 'resume-display' not found.");
if (!resumeDisplayOutput) console.error("Resume output element with ID 'resumeOutput' not found.");

//Handling profile picture display
const resumeProfilePictureInput = document.getElementById("profilePicture") as HTMLInputElement | null;
const resumeImgPreview = document.querySelector(".img-pic img") as HTMLImageElement | null;

if (resumeProfilePictureInput && resumeImgPreview) {
    resumeProfilePictureInput.addEventListener("change", (event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                if (resumeImgPreview instanceof HTMLImageElement) {
                    resumeImgPreview.src = reader.result as string;
                }
            };
            reader.readAsDataURL(target.files[0]);
        }
    });
} else {
    console.error("Profile picture input or image preview element not found.");
}





// Function to generate and display resume
function generateResume(event: Event) {
    event.preventDefault(); // Prevent form submission

    const resumeDisplayOutput = document.getElementById('resumeOutput'); // Ensure it's the correct element
    if (!resumeDisplayOutput) {
        console.error("Cannot display resume because resumeOutput is null.");
        return; // Exit if resumeOutput is null
    }


    // Collecting input values with null checks and defaults
    const name = (document.getElementById("name") as HTMLInputElement)?.value || "";
    const cnic = (document.getElementById("cnic") as HTMLInputElement)?.value || "";
    const residence = (document.getElementById("residence") as HTMLInputElement)?.value || "";
    const dob = (document.getElementById("dob") as HTMLInputElement)?.value || "";
    const contact = (document.getElementById("contact") as HTMLInputElement)?.value || "";
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value || "";
    const email = (document.getElementById("email") as HTMLInputElement)?.value || "";
    const address = (document.getElementById("address") as HTMLInputElement)?.value || "";
    const objective = (document.getElementById("objective") as HTMLTextAreaElement)?.value || "";
    const certifications = (document.getElementById("certifications") as HTMLTextAreaElement)?.value || "";
    const frontendTechnologies = (document.getElementById("frontendTechnologies") as HTMLTextAreaElement)?.value || "";
    const problemSolving = (document.getElementById("problemSolving") as HTMLTextAreaElement)?.value || "";
    const softSkills = (document.getElementById("softSkills") as HTMLTextAreaElement)?.value || "";
    const designPrototyping = (document.getElementById("designPrototyping") as HTMLTextAreaElement)?.value || "";
    const education = (document.getElementById("education") as HTMLTextAreaElement)?.value || "";
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement)?.value || "";
    const projectsDetails = (document.getElementById("projectsDetails") as HTMLTextAreaElement)?.value || "";
    const hobbies = (document.getElementById("hobbies") as HTMLTextAreaElement)?.value || "";

    // Creating HTML for dynamic resume display
    const resumeHTML = 
        <h2>${name}</h2>
        <p><strong>CNIC:</strong> ${cnic}</p>
        <p><strong>Residence:</strong> ${residence}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        
        <h3>Career Objective</h3>
        <p>${objective}</p>
        
        <h3>Certifications</h3>
        <p>${certifications}</p>
        
        <h3>Skills</h3>
        <p><strong>Frontend Technologies:</strong> ${frontendTechnologies}</p>
        <p><strong>Problem Solving:</strong> ${problemSolving}</p>
        <p><strong>Soft Skills:</strong> ${softSkills}</p>
        <p><strong>Design & Prototyping:</strong> ${designPrototyping}</p>

        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
        
        <h3>Projects</h3>
        <p>${projectsDetails}</p>
        
        <h3>Hobbies</h3>
        <p>${hobbies}</p>
    ;

    // Displaying generated resume
    resumeDisplayOutput.innerHTML = resumeHTML;
}

// Adding submit event listener to the form with null check
resumeForm?.addEventListener("submit", generateResume);
