//create an array to store companies->"bloomberg","microsoft","uber,"google","ibm","netflix"
//a.remove the first company from array
let company=["bloomberg","microsoft","uber","google","ibm","netflix"];
company.shift();
//b.remove uber and add ola in this place
company.splice(1,1,"ola");
//c.add amazon at the end
company.push("amazon");