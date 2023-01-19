const getAge = (stringDate) => {
    var ageDif = Date.now() - new Date(stringDate).getTime()
    var ageDate = new Date(ageDif)
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

module.exports = { getAge }