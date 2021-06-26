const fs = require('fs');

const data = [
  {name: 'satish', password: 'testPass'},
  {name: 'bhavya', password: 'sattu123'},
  {name: 'divya', password: 'lol_lol'},
  {name: 'testperson', password: 'testperson'},
];

const cbFunc = (name, password) => {
  return (error, response) => {
    if(error) throw Error(error);
    const data = JSON.parse(response);
    const secret = data[password];
    console.log(`${name}: ${secret}`);
  }
}

const readFile = () => {
  data.forEach(({name,password}) => {
    fs.readFile(`./db/${name}.json`, 'utf8', cbFunc(name, password))
  })
}

readFile();