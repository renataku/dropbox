import {
  getUsers,
  deleteUser,
  getUser,
  createUser,
  patchUser,
} from "./posts_helpers.js";

let arrUsers = [];

getUsers()
  .then((data) => renderTable(data))
  .catch((err) => console.log(err));

function renderTable(arr) {
  arrUsers = [...arr];
  console.log(arrUsers);
  let usersTable = document.getElementById("users-table");
  const headRow = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");
  const th5 = document.createElement("th");
  const th6 = document.createElement("th");

  th1.textContent = "Name";
  th2.textContent = "User name";
  th3.textContent = "Email";
  th4.textContent = "Website";
  th5.textContent = "Phone";
  th6.textContent = "Actions";

  usersTable.innerHTML = "";

  headRow.appendChild(th1);
  headRow.appendChild(th2);
  headRow.appendChild(th3);
  headRow.appendChild(th4);
  headRow.appendChild(th5);
  headRow.appendChild(th6);
  usersTable.appendChild(headRow);

  arr.forEach(
    (element) => {
      const row = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      const td5 = document.createElement("td");
      const td6 = document.createElement("td");
      const img1 = document.createElement("img");
      // const img2 = document.createElement("img");
      const img3 = document.createElement("img");
      const img4 = document.createElement("img");

      td1.textContent = element.name;
      td2.textContent = element.username;
      td3.textContent = element.email;
      td4.textContent = element.website;
      td5.textContent = element.phone;

      img1.setAttribute("src", "img/eye.png");
      img1.setAttribute("class", "table-icon");
      // img2.setAttribute("src", "img/plus.png");
      // img2.setAttribute("class", "table-icon");
      img3.setAttribute("src", "img/edit.png");
      img3.setAttribute("class", "table-icon");
      img4.setAttribute("src", "img/bin.png");
      img4.setAttribute("class", "table-icon");

      img1.addEventListener("click", function () {
        userEvent("view", element.id);
      });
      // img2.addEventListener("click", function () {
      //   addUser(element.id);
      // });
      img3.addEventListener("click", function () {
        userEvent("edit", element.id);
      });
      img4.addEventListener("click", function () {
        deleteUser(element.id);
      });
      td6.appendChild(img1);
      // td6.appendChild(img2);
      td6.appendChild(img3);
      td6.appendChild(img4);
      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);
      row.appendChild(td6);
      document.getElementById("users-table").appendChild(row);
    }

    //   document.getElementById('closePopup').addEventListener('click', function () {
    //     document.getElementById('popup').style.display = 'none';
    // });
  );
}

function userEvent(type, id) {
  console.log(type, id);
  switch (type) {
    case "view":
      getUser(id).then((res) => renderUserData(res));
      break;
    case "edit":
      getUser(id).then((res) => editUser(res));
      break;
    case "delete":
      break;
    default:
      break;
  }
}

function renderUserData(res) {
  console.log("VIEW: ", res);
  // console.log("VIEW: ", id);
  // const viewResult = arrUsers.findIndex(function (item, index, array) {
  //   return item.id === id;
  // });
  // console.log("arrUsers[viewResult]: ", arrUsers[viewResult]);
  // console.log(typeof viewResult);
  // let viewResultArray = [];

  // viewResultArray.push(arrUsers[viewResult]);
  // console.log(arrUsers[viewResult].name, arrUsers[viewResult].address.street);

  let usersInfo = document.getElementById("popupContent");
  usersInfo.innerHTML = "";
  const newDiv = document.createElement("div");
  const newDivAddress = document.createElement("div");
  const newDivCompany = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");
  const p6 = document.createElement("p");
  const p7 = document.createElement("p");
  const p8 = document.createElement("p");
  const p9 = document.createElement("p");
  const p10 = document.createElement("p");
  const p11 = document.createElement("p");
  const p12 = document.createElement("p");
  const p13 = document.createElement("p");
  const p14 = document.createElement("p");
  const p15 = document.createElement("p");
  p1.textContent = `ID: ${res.id}`;
  p2.textContent = `Name: ${res.name}`;
  p3.textContent = `User name: ${res.username}`;
  p4.textContent = `Address: `;
  p5.textContent = `Street: ${res.address.street}`;
  p6.textContent = `Suite: ${res.address.suite}`;
  p7.textContent = `City: ${res.address.city}`;
  p8.textContent = `Zip code: ${res.address.zipcode}`;
  p9.textContent = `Geo - lattitude: ${res.address.geo.lat}, longitude: ${res.address.geo.lng}`;
  p10.textContent = `Phone: ${res.phone}`;
  p11.textContent = `Website: ${res.website}`;
  p12.textContent = `Company:`;
  p13.textContent = `Name: ${res.company.name}`;
  p14.textContent = `Phraze: ${res.company.catchPhrase}`;
  p15.textContent = `Slogan: ${res.company.bs}`;
  newDivAddress.setAttribute("class", "inside-block");
  newDivCompany.setAttribute("class", "inside-block");
  newDiv.appendChild(p1);
  newDiv.appendChild(p2);
  newDiv.appendChild(p3);
  newDiv.appendChild(p4);
  newDivAddress.appendChild(p5);
  newDivAddress.appendChild(p6);
  newDivAddress.appendChild(p7);
  newDivAddress.appendChild(p8);
  newDivAddress.appendChild(p9);
  newDiv.appendChild(newDivAddress);
  newDiv.appendChild(p10);
  newDiv.appendChild(p11);
  newDiv.appendChild(p12);
  newDivCompany.appendChild(p13);
  newDivCompany.appendChild(p14);
  newDivCompany.appendChild(p15);
  newDiv.appendChild(newDivCompany);
  usersInfo.appendChild(newDiv);
  document.getElementById("popup").style.display = "block";
  // Pakrauna duomenis pagal user id
  // Render user data
}
function editUser(res) {
  console.log("EDIT: ", res);
  let usersInfo = document.getElementById("popupContent");
  usersInfo.innerHTML = `id: ${res.id}<br>
  Name: <input type='text' name='name' id='user-name' value="${res.name}"><br>
  User name: <input type='text' name='username' id='user-username' value="${res.username}"><br><br>
Address: <br>
Street: <input type='text' name='address.street' id='user-address.street' value="${res.address.street}"><br>
Suite: <input type='text' name='address.suite' id='user-address.suite' value="${res.address.suite}"><br>
City: <input type='text' name='address.city' id='user-address.city' value="${res.address.city}"><br>
Zip code: <input type='text' name='address.zipcode' id='user-address.zipcode' value="${res.address.zipcode}"><br>
Geo - lattitude: <input type='text' name='address.geo.lat' id='user-address.geo.lat' value="${res.address.geo.lat}">, longitude: <input type='text' name='address.geo.lng' id='user-address.geo.lng' value="${res.address.geo.lng}"><br>
Phone: <input type='text' name='phone' id='user-phone' value="${res.phone}"><br>
Website: <input type='text' name='website'id='user-website' value="${res.website}"><br><br>
Company:<br>
Name: <input type='text' name='company.name' id='user-company.name' value="${res.company.name}"><br>
Phraze: <input type='text' name='company.catchPhrase' id='user-catchPhrase' value="${res.company.catchPhrase}"><br>
bs: <input type='text' name='bs' id='user-bs' value="${res.company.bs}"><br>`;
  const but = document.createElement("button");
  but.textContent = "Change";
  but.setAttribute("class", "butt-change");
  but.setAttribute("type", "button");
  usersInfo.appendChild(but);

  document.getElementById("user-name").addEventListener(onchange, function () {
    console.log("aaaa");
    console.log(document.getElementById("user-name").value);
  });

  but.addEventListener("click", function () {
    console.log(arrUsers[res.id - 1]);
    patchUser(res.id, arrUsers[res.id - 1])
      .then((data) => renderTable(data))
      .catch((err) => console.log(err));
  });

  document.getElementById("popup").style.display = "block";
}

function addUser(id) {
  console.log("ADD: ", id);
}
function deleteUser2(id) {
  console.log("DELETE: ", id);
}

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popupContent").innerHTML = "";

  document.getElementById("popup").style.display = "none";
});
