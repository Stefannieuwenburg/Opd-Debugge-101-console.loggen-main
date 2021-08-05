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
    {name:"Company One",category:"Finance",start:1981, end:2003},
    {name:"Company Two",category:"Reatail",start:1992, end:2008},
    {name:"Company Three",category:"Auto",start:1999, end:2007},
    {name:"Company Four",category:"Tech",start:1985, end:2011},
    {name:"Company Five",category:"Finance",start:1986, end:2014},
    {name:"Company Six",category:"Auto",start:1989, end:2016},
    {name:"Company Seven",category:"Tech",start:1977, end:2010},
    {name:"Company Eicht",category:"Reatail",start:1960, end:2013},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
//forEach
//filter 
//map
//sort
//reduce
