let sandwiches = JSON.parse('{ "sandwich": "hamburger", "calories": "260" }');
let fries = JSON.parse(
  '{ "fries_size": "Large French Fries", "calories": "570" }'
);

let message =
  "My favorite sandwich is a " +
  sandwiches.sandwich +
  " which has approximately " +
  sandwiches.calories +
  " calories, along with it I enjoy eating " +
  fries.fries_size +
  " which have about " +
  fries.calories +
  " calories.";

document.write(message);
