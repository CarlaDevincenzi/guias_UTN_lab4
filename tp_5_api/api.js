// ejemplo POST: https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest
// ejemplo DELETE: https://stackoverflow.com/questions/19840509/sending-put-delete-data-with-a-xmlhttprequest
//import { getData, postData, deleteData } from "./http";

const _url = "https://utn-lubnan-api-1.herokuapp.com/api/";
const _employee = "Employee";
const _company = "Company";

const ERROR_MESSAGE = "Oops!, there was a network error.";

const newEmployee = {
    // employeeId: 1001,  // no es necesario, se autogenera 
    companyId: 1,
    firstName: "Carla",
    lastName: "Devincenzi",
    email: "anabellacarla2301@gmail.com"
}

const _idData = 3;

/*
   ------------------ METODOS HTTP --------------------------
*/
function getData(url, dataType) {
  return new Promise((resolve, reject) => {    
      let request = new XMLHttpRequest();
      request.open("GET", url);
      request.responseType = "json";
      request.onload = () => {
        if (request.status == 200) {
          resolve(request.response);
        } else {
          reject(
            Error(dataType + " couldn't be loaded. Error: " + request.statusText)
          );
        }
      };  
      request.onerror = () => {
        reject(Error(ERROR_MESSAGE));
      };
  
      request.send();       
  });
}

function postData(url, dataType, newData) {
  return new Promise((resolve, reject) => {    
      let request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader('Content-type', 'application/json');
      request.onload = () => {
        if (request.status == 200) {
          resolve(dataType + " agregado con exito!");
        } else {
          reject(
            Error(dataType + " couldn't be loaded. Error: " + request.statusText)
          );
        }
      };  
      request.onerror = () => {
        reject(Error(ERROR_MESSAGE));
      };
  
      request.send(JSON.stringify(newData));       
  });
}

function deleteData(url, dataType, idData) {
  return new Promise((resolve, reject) => {    
      let request = new XMLHttpRequest();
      request.open("DELETE", `${url}/${idData}`);      
      request.onload = () => {
        if (request.status == 200) {
          resolve(dataType + " eliminado con exito!");
        } else {
          reject(
            Error(dataType + " couldn't be loaded. Error: " + request.statusText)
          );
        }
      };  
      request.onerror = () => {
        reject(Error(ERROR_MESSAGE));
      };
  
      request.send(null);       
  });
}

/*
   ------------------ ASYNC / AWAIT FUNCTIONS --------------------------
*/
let showData = async function () {
    let list = document.querySelector("ul");
    let companies = [];

    await getData(`${_url}${_company}`, "Companies")
      .then((response) => {
        companies = [...response];
      })
      .catch((reason) => {
        console.log(Error(reason));
        alert(reason);
      });

    await getData(`${_url}${_employee}`, "Employees")
      .then((response) => {
        // itera cada posicion del array de objetos devuelto por la api
        for (let emp of response) {
          let li = document.createElement("li");
          // itera sobre cada propiedad del objeto en una posicion dada del array
          for (let data in emp) {
            li.append(`${data}: ${emp[data]} --- `);

            if (data === "companyId") {
              // busca en el array de companies, cargado con llamado anterior a la api, la compañia que corresponda a su id
              let company = companies.find((com) => com.companyId == emp[data]);
              li.append(`companyName: ${company.name} --- `);
            }
          }
          list.append(li);
        }
      })
      .catch((reason) => {
        console.log(Error(reason));
        alert(reason);
      });
};

let postAndShow = async function() {
    await postData(`${_url}${_employee}`, "Employee", newEmployee)
      .then((response) => {
        alert(response);
        showData();
      })
      .catch((reason) => alert(reason));
}

let deleteAndShow = async function() {
  await deleteData(`${_url}${_employee}`, "Employee", _idData)
    .then((response) => {
      alert(response);
      showData();
    })
    .catch((reason) => alert(reason));
}

//showData();
//postAndShow();
deleteAndShow();
