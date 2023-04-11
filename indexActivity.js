console.log("Hello, Welcome to De La Salle University!");

const firstName = "Roberto";
const lastName = "Latorilla";
const age = 21;
const hobbies = ["Road Trip", "Football", "Online Games", "Nature Trip", "Coffee tasting"];
const homeAddress = {
        houseNumber: "Blk 9 Lot 22 Phase 1",
        street: "Flintridge St.",
        subdivision: "Canyon Ranch",
        barangay: "Brgy. Lantic",
        city: "Carmona",
        province: "Cavite",
    zipCode: "4116"
};
        

console.log(`My Name is ${firstName} ${lastName}, ${age} yrs old`)
console.log(`My hobbies are ${hobbies.join(", ")}`)
console.log(`I live in ${homeAddress.houseNumber} ${homeAddress.street}, ${homeAddress.subdivision}, ${homeAddress.barangay}, ${homeAddress.city}, ${homeAddress.province} ${homeAddress.zipCode}`);
    
