export async function addPerson(namePerson) {
  var axios = require("axios");
  var data = JSON.stringify({
    name: namePerson,
  });

  var config = {
    method: "post",
    url: "/api/person",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config).catch(function (error) {
    console.log(error);
  });
}

export async function getAllPeople() {
  var axios = require("axios");

  var config = {
    method: "get",
    url: "/api/person",
    headers: {
      "Content-Type": "application/json",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log(response.data);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}
