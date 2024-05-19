function getAgeAndGender(id_number) {
    let get_gender = id_number.charAt(6);

    let gender;

    gender = get_gender >= 4 ? "Male" : "Female";

    let year = parseInt(id_number.substring(0, 2), 10);
    let month = parseInt(id_number.substring(2, 4), 10);
    let day = parseInt(id_number.substring(4, 6), 10);

    // Determine the full year
    let currentYear = new Date().getFullYear();
    let century = (year < currentYear % 100) ? 2000 : 1900;
    let fullYear = century + year;

    
    let age = currentYear - fullYear;


    return { gender, age };
}

module.exports = getAgeAndGender;
