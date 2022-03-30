import fetch from "node-fetch";

const data = {
  id: 378945,
  name: "your_name",
  city: "your_city",
  email: "your@email.com",
};

const endpoint = `http://localhost:4000/users/1`;

function updateUser() {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (data) {
        return res.json();
      }
      return null;
    })
    .catch((error) => {
      throw new Error(`Error on updated user: ${error}`);
    });
}

updateUser();
