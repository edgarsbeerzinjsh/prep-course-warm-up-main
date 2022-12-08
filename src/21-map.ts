export {};

function tidyUpString(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
  //const cleanName = tidyUpString(str);
  //return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
const mentorsTidy: string[] = mentors.map((mentor) => capitalise(tidyUpString(mentor)))

//let mentorsTidy = mentors.map(capitalise) ; // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
