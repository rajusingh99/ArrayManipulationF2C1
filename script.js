const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.map((d)=>{
    if(d.profession==="developer")
    {
      console.log(d)
    }
  })
}
function handleAddData(){
  console.log(newData)
}
// 2. Add Data
function addData() {
  var a = prompt("name:");
  var b = prompt("age : ")
  var c = prompt("profession : ");
  const newData = {a,b,c};
  data.push(newData)
  console.log(data)
}

// 3. Remove Admins
function removeAdmin() {
  const removedAdmin=  data.filter((item)=>
      item.profession!=="admin"
    )
    console.log(removedAdmin)
}

// 4. Concatenate Array
function concatenateArray() {
  const newArrayData = [
    { name: "Alena", age: 20, profession: "intern" },
    { name: "jane", age: 15, profession: "studend" },
  ];
  const concatinatedData = data.concat(newArrayData)
  console.log(concatinatedData)
}

// 5. Average Age
function averageAge() {
var totalAge=0;
  data.map((d)=>{
     totalAge += d.age
  })
  console.log("average age:",totalAge / data.length)
}

// 6. Age Check
function checkAgeAbove25() {
    const olderThan25 = data.map((d)=>{
      if(d.age>25){
        console.log(d)
      }
    })
}

// 7. Unique Professions
function uniqueProfessions() {
    const uniqueProfessionSet = new Set();

    data.forEach((item) => {
      uniqueProfessionSet.add(item.profession);
    });
    const uniqueProfessionsArray = [...uniqueProfessionSet];
    console.log("Distinct Professions:");
    console.log(uniqueProfessionsArray);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data)
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find((item) => item.name === "john");
  if (john) {
    john.profession = "manager";
  } else {
    console.log("John not found in the array.");
  }
  console.log(data)

  
}

// 10. Profession Count
function getTotalProfessions() {
  const uniqueProfessionsSet = new Set();
  data.forEach((item) => {
    uniqueProfessionsSet.add(item.profession);
  });

  const uniqueProfessionsArray = [...uniqueProfessionsSet];
  console.log(uniqueProfessionsArray.length);
}
