//script
//Oefen opdracht van youtube
/*
Leerdoelen:

Ik begrijp hoe de volgende array methods werken:

de .filter method [video: 0:20sec]
de .map method [video: 1:58sec]
de .find method [video: 2:54sec]
de .forEach method [video: 3:42sec]
de .some method [video: 4:30sec]
de .every method [video: 5:50sec]
de .reduce method [video: 6:27sec]
de .includes method [video: 8:51sec]
Ik kan elke van bovenstaande methods toepassen en opslaan in zelf benoemde variable array maken in JavaScript
video https://youtu.be/R8rmfD9Y5-c
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const items = [
    {name: "bike",  price:100},
    {name: "tv",    price:200},
    {name: "Album", price:10 },
]

const filteredItems = items.filter((item) =>{
    return item.price <= 100
})

console.log(filteredItems)


const ItemName = items.map((item) =>{
    return item.name
})

console.log(ItemName)

*/
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


//opd A forEach
//Opd B filter 
//Opd C map
//Opd D sort
//OPD E reduce

//Opd A
//companies.forEach((Company) =>{
//    console.log(Company.start);
//});

//Opd B filter op drink leeftijd:

//const canDrink = ages.filter(age => age >= 18);
//console.log(canDrink);


//const retailCompanies = companies.filter(function(company) {
//if (company.category ==="Retail"){
    //return true;
//}
//});

//const retailCompanies = companies.filter(company => company.category ==="Retail");
//console.log(retailCompanies);

//const eightiesCompanies = companies.filter(company =>(company.start >=
   // 1980 && company.start < 1990));

//console.log(eightiesCompanies);
//const lastedTenYears = companies.filter(company =>(company.end - company.start >= 10));
//console.log(lastedTenYears);

//Opd C map
//creat Array of company names 

//const companyNames = companies.map(function(company) {
 //   return company.name;
//});
//const companyNames = companies.map(company => (company.name))
//console.log(companyNames);

//Opd D sort by de begin datum !!!!

//const sortedCompanies = companies.sort(function(c1,c2){
//    if (c1.start > c2.start) {
 //       return 1;
 //   }else {
 //    return -1;
 //           }
 //       }
 //   );

// Arrow way ? is if/else 
//const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1:-1));    
//console.log(sortedCompanies);

//const sortAges = ages.sort((a,b) => a-b);
//console.log(sortAges);

//OPD E reduce
//const ageSum = ages.reduce((total, age)=> total + age, 0);
//console.log(ageSum);

//const combined = ages
//.map(age => age * 2)
//.filter(age => age >= 40)
//.sort((a,b)=> a - b)
//.reduce((a,b) => a+b,0);

//console.log(combined);
const animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Jimmy',      species: 'fish' },
  ]

//for loops van een array.

  var names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}
console.log(names);
