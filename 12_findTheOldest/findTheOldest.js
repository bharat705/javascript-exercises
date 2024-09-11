const findTheOldest = function (peopleArray) {
  let maximumAge = 0;
  let age = 0;
  let oldestPerson = {};
  peopleArray.forEach((person) => {
    age = calculateAge(person);
    if (age > maximumAge) {
      maximumAge = age;
      oldestPerson = person;
    }
  });
  return oldestPerson;
};

function calculateAge(objects) {
  const today = new Date().getFullYear();
  const hasYearOfDeath = "yearOfDeath" in objects;
  if (hasYearOfDeath) {
    return (age = objects.yearOfDeath - objects.yearOfBirth);
  } else {
    return (age = today - objects.yearOfBirth);
  }
}

// Do not edit below this line
module.exports = findTheOldest;
