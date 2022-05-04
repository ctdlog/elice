const HOST_NAME = "https://jsonplaceholder.typicode.com";

const tbody = document.querySelector("table tbody");

async function getUsers() {
  /*
    fetch 함수를 이용해서 users 정보를 가져옵니다.

    최종적으로 호출될 URL : https://jsonplaceholder.typicode.com/users
  */
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const users = await res.json();

  let cnt = 1;
  for (let user of users) {
    /*
      아래와 같은 형태로 데이터를 tbody에 추가해주시면 됩니다.
      <tr>
        <th>1</th>
        <td>Leanne Graham</td>
        <td>Sincere@april.biz</td>
        <td>Romaguera-Crona</td>
      </tr>

      추가하는 방법은 createElement를 사용하셔도 좋고,
      innerHTML 방식으로 추가하셔도 좋습니다.

      저는 createElement를 이용해서 첫번째 컬럼(#)을 추가했습니다.
    */

    const tr = document.createElement("tr");

    const tdNum = document.createElement("td");
    const textNum = document.createTextNode(++cnt);
    tdNum.appendChild(textNum);

    const tdUserName = document.createElement("td");
    const userName = document.createTextNode(user.name);
    tdUserName.appendChild(userName);

    const tdUserEmail = document.createElement("td");
    const userEmail = document.createTextNode(user.email);
    tdUserEmail.appendChild(userEmail);

    const tdUserCompany = document.createElement("td");
    const userCompany = document.createTextNode(user.company.name);
    tdUserCompany.appendChild(userCompany);

    tr.appendChild(tdNum);
    tr.appendChild(tdUserName);
    tr.appendChild(tdUserEmail);
    tr.appendChild(tdUserCompany);

    /*
      위에 추가한 것처럼 이름, 이메일, 회사명을 차례로 추가해봅시다!
    */

    tbody.appendChild(tr);
  }
}
getUsers();

async function insertUser(data) {
  /*
    fetch 함수를 이용해서 users 정보를 추가합니다.

    최종적으로 호출될 URL : https://jsonplaceholder.typicode.com/users
  */
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const insertData = await res.json();

  console.log(insertData);

  /*
    Fake API이기 때문에 실제로는 작업이 일어나진 않고,
    id 값만 추가되어 반환됩니다.
    그래서 id 값이 존재하는 지 확인해보고 진행합니다.
  */
  if ("id check") {
    /*
      아래와 같은 형태로 입력된 데이터를 추가해주시면 됩니다.
      <tr>
        <th>1</th>
        <td>Leanne Graham</td>
        <td>Sincere@april.biz</td>
        <td>Romaguera-Crona</td>
      </tr>
    */
  }
}

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const company = document.getElementById("company").value;

  insertUser({
    name: name,
    email: email,
    company: company,
  });
});

function deleteUser(deleteId) {
  const rows = document.querySelectorAll("tbody tr");

  /*
    각 row를 tr 태그로 가져오고,
    th 태그를 이용해서 id 값을 가져온 다음
    deleteId와 비교하여 삭제해보도록 하자!
  */
}

const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", () => {
  const deleteId = document.getElementById("delete-id").value;

  deleteUser(deleteId);
});
