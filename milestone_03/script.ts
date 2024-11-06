const form = document.getElementById("resume-container") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // Prevent form submission




  
 
  
 

  // Get all form elements
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const cnic = (document.getElementById("cnic") as HTMLInputElement).value;
  const residence = (document.getElementById("residence") as HTMLInputElement).value;
  const dob = (document.getElementById("dob") as HTMLInputElement).value;
  const contact = (document.getElementById("contact") as HTMLInputElement).value;
  const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement).value;

  const careerObjective = (document.getElementById("objective") as HTMLTextAreaElement).value;
  const certifications = (document.getElementById("certifications") as HTMLTextAreaElement).value;
  const frontendTechnologies = (document.getElementById("frontendTechnologies") as HTMLTextAreaElement).value;
  const problemSolving = (document.getElementById("problemSolving") as HTMLTextAreaElement).value;
  const softSkills = (document.getElementById("softSkills") as HTMLTextAreaElement).value;
  const designPrototyping = (document.getElementById("designPrototyping") as HTMLTextAreaElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
  const projects = (document.getElementById("projectsDetails") as HTMLTextAreaElement).value;
  const hobbiesContent = (document.getElementById("hobbies") as HTMLTextAreaElement).value;

  const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
  const profilePictureFile = profilePictureInput.files?.[0];



  
  // Basic resume content HTML
  let resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>CNIC:</b> ${cnic}</p>
    <p><b>Residence:</b> ${residence}</p>
    <p><b>Date of Birth:</b> ${dob}</p>
    <p><b>Contact No:</b> ${contact}</p>
    <p><b>Gender:</b> ${gender}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Address:</b> ${address}</p>

    <h3><b>Career Objective</b></h3>
    <p>${careerObjective}</p>

    <h3><b>Certifications</b></h3>
    <p>${certifications}</p>

    <h3><b>Frontend Technologies</b></h3>
    <p>${frontendTechnologies}</p>

    <h3><b>Problem Solving</b></h3>
    <p>${problemSolving}</p>

    <h3><b>Soft Skills</b></h3>
    <p>${softSkills}</p>

    <h3><b>Design & Prototyping</b></h3>
    <p>${designPrototyping}</p>

    <h3><b>Education</b></h3>
    <p>${education}</p>

    <h3><b>Work Experience</b></h3>
    <p>${workExperience}</p>

    <h3><b>Projects</b></h3>
    <p>${projects}</p>

    <h3><b>Hobbies</b></h3>
    <p>${hobbiesContent}</p>
  `
;
  if (profilePictureFile) {
    const reader = new FileReader();
    reader.onload = function () {
      const profilePictureHTML = `<img src="${reader.result}" alt="Profile Picture" class="profilePicture">`;
      // Append profile picture to resume HTML
      resumeHTML = profilePictureHTML + resumeHTML;
      displayResume(resumeHTML);
    };
    reader.readAsDataURL(profilePictureFile);
  } else {
    // No profile picture, generate the resume immediately
    displayResume(resumeHTML);
  }
});





function displayResume(resumeHTML: string) {
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error("Failed to display resume");
  }



}

