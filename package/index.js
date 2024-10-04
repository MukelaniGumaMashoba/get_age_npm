function getAgeAndGender(id_number) {
    if (typeof id_number !== 'string' || id_number.length !== 13) {
        throw new Error("Invalid ID number format. Must be a 13-character string.");
    }

    // Gender determination
    let get_gender = parseInt(id_number.charAt(6), 10);
    let gender = (get_gender < 5) ? "Female" : "Male";

    // Extract year, month, and day
    let year = parseInt(id_number.substring(0, 2), 10);
    let month = parseInt(id_number.substring(2, 4), 10);
    let day = parseInt(id_number.substring(4, 6), 10);

    // Determine the full year
    let currentYear = new Date().getFullYear();
    let fullYear = (year > currentYear % 100) ? 1900 + year : 2000 + year;

    // Calculate age
    let age = currentYear - fullYear;

    // Adjust age if the current date is before the birth date
    let currentMonth = new Date().getMonth() + 1; // getMonth() is 0-indexed
    let currentDay = new Date().getDate();
    
    if ((currentMonth < month) || (currentMonth === month && currentDay < day)) {
        age--;
    }

    return { gender, age };
}

module.exports = getAgeAndGender;
