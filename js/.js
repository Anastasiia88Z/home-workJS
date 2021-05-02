1. const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium","promoted","top"],
}
  
  console.log(apartment)


  2. const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    
    owner: {
      name: "Генри",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com"
    },
  };


  3. const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Пиши код ниже этой строки
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Пиши код выше этой строки

console.log(aptRating);
console.log(aptDescr);
console.log(aptPrice);
console.log(aptTags);


4. const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Пиши код ниже этой строки
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Пиши код выше этой строки


5. const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Пиши код ниже этой строки
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Пиши код выше этой строки

6. const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Пиши код ниже этой строки
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Генри Сибола";
apartment.tags.push("trusted");

7. const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Генри Сибола',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Пиши код ниже этой строки
apartment.area = 60;
apartment.rooms =3;
apartment.location = {
  country: "Ямайка",
  city: "Кингстон"
}


8.
const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Пиши код ниже этой строки
name,
price,
image,
tags


9. const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Пиши код ниже этой строки
  [passwordInputName]: 'jqueryismyjam',
  [emailInputName]: 'henry.carter@aptmail.com',
  
  
  // Пиши код выше этой строки
};

10. const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = ['descr', 'rating', 'price'];
const values = ['Просторная квартира в центре', 4, 2153];
// Пиши код ниже этой строки
for(const keys in apartment) {
};

console.log(apartment)
console.log(keys)

for(const values in apartment) {
}
console.log(values)

11. const keys = ['descr', 'rating', 'price'];
const values = ['Просторная квартира в центре', 4, 2153];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
if (apartment.hasOwnProperty(keys)){
  
    keys.push(key);
   
  values.push(apartment[key]);
}
  // Пиши код выше этой строки
}

12. function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
for (key in object) {
if (object.hasOwnProperty(key)) {
  propCount+=1}}
  // Пиши код выше этой строки
  return propCount;

}

13. const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки

const keys = Object.keys(apartment);
for(const key of keys) {
    values.push(apartment[key]);

};

console.log(values);

14. function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;
  
  const keys = Object.keys(object);
  
  for (const key of keys) {
  
      propCount += 1;
    
  }

  return propCount;
  // Пиши код выше этой строки
}

15. const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);

16. 
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки

 const values = Object.values(salaries);
  
  for (const value of values) {
  
      totalSalary += value;
    
  }
  
  // Пиши код выше этой строки
  return totalSalary;
}

17. const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

18. const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  for (const product of products) { 
    
    if (product.name === productName) {
      return product.price
  }
  }
  return null
  // Пиши код выше этой строки
}


19. const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  
  const propValues = [];
  for (const product of products) {
    if (product[propName]) {
      propValues.push(product[propName])
    }
  }
return propValues
  // Пиши код выше этой строки
}
 console.log (products)

20. const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let totalPrice = 0;
  for (product of products) {
    if (productName === product.name) {
      totalPrice = product.price * product.quantity;
    }
  }
return totalPrice;
  // Пиши код выше этой строки
}

21. const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday, today, tomorrow} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;


22. const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {
  yesterday,
  today,
  tomorrow, 
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;


23.const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;
// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

24. const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

25. const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки
// Пиши код ниже этой строки
const  {
  today: {low: lowToday, 
          high: highToday, 
          icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
 },
  tomorrow: {
    low: lowTomorrow, 
    high: highTomorrow, 
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
}
} = forecast;

26. // Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
  const {today: {
    low: todayLow,
    high: todayHigh,
  },
     tomorrow: {
     low: tomorrowLow,
     high: tomorrowHigh,
     }
    } = forecast;
  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


27. const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = (Math.max(...scores));
const worstScore = (Math.min(...scores));


28. const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = (Math.max(...allScores));
const worstScore = (Math.min(...allScores));

29. const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = {...defaultSettings,...overrideSettings};

30. 