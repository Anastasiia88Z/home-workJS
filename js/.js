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

30. function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  
const newData = {completed,category,priority,...data};
                 
return newData;
  // Пиши код выше этой строки
}


32. function add(...args) {
 
  let totalAdd = 0;
  
  for (arg of args){
    
   totalAdd += arg;
    
  } 
  return totalAdd;
  // Пиши код выше этой строки
}


33. // Пиши код ниже этой строки
function findMatches(firstNumber,...args) {
  
  const matches = []; // Не изменяй эту строку

  for (const arg of args) {
    
    if (firstNumber.includes(arg)) {
      
      matches.push(arg);
    }
  }
  
  // Пиши код выше этой строки
  return matches;
}

34. const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  
  getBooks() {
    return 'Возвращаем все книги';
  },
  
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  
  removeBook() {
    return 'Удаляем книгу Красный закат';
  },
  updateBook() {
    return 'Обновляем книгу Пески Дюны на Дюна';
  },
  // Пиши код выше этой строки
};

35. const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
	
	
	let indexOfOldBook=this.books.indexOf(oldName);
    this.books.splice(indexOfOldBook, 1, newName);
  
    // Пиши код выше этой строки
  },
};


36. const atTheOldToad = {
  // Пиши код ниже этой строки
  
  potions: [],
  getPotions() {
    return this.potions;
  }
  // Пиши код выше этой строки
};

37. const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
    return this.potions;
  }
  
  // Пиши код выше этой строки
};

38. const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    
    this.potions.push(potionName);
    
    // Пиши код выше этой строки
  },
};

39. const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    
  const potionIndex = this.potions.indexOf(potionName);
  this.potions.splice(potionIndex, 1); 
    // Пиши код выше этой строки
  },
};


40. const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
 
   let indexOfOldPotions = this.potions.indexOf(oldName);
    this.potions.splice(indexOfOldPotions, 1, newName);
    
    
    // Пиши код выше этой строки
  },
};

41. const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const  {potions} = this;

    for (let i = 0; i < potions.length; i += 1) {

    const potion = potions[i];

      if (potionName === potion.name) {
        
      potions.splice(i, 1);
     
    }
   }
  },
  
  updatePotionName(oldName, newName) {
    const {potions} = this; 
    
    for (let i = 0; i <= potions.length; i += 1) {
    
    if (oldName === potions[i].name) {
      
      potions[i].name = newName;
      return;
      }
    }
      return `Зелья ${oldName} нет в инвентаре!`;
  },
  // Пиши код выше этой строки
};


// 4 MODUL

1. function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки

const result = makePizza('Ваша пицца готовится, ожидайте.');
const pointer = makePizza;

2. function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
  callback(deliverPizza, makePizza);
}

3. function makePizza(pizzaName, callback) {
  console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza('Роял гранд', function deliverPizza(pizzaName) {
  console.log(`Доставляем пиццу ${pizzaName}.`);
});
// Пиши код ниже этой строки

makePizza('Ультрасыр', function eatPizza(pizzaName) {
  console.log('Едим пиццу ${pizzaName}.');
});

4. const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName,onSuccess,onError) {
    if (!this.pizzas.includes(pizzaName)) {
    
    return onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
    }
    return makePizza(pizzaName);
  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);


5. const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};

6. const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']


7. const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки
function composeMessage(position) {
   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${++position}-й в очереди.`;  
}

const messages = [];

for (let key = 0; key < Object.keys(orders).length; key++) { messages.push(composeMessage.call(orders[key], key));
                                                           }
console.log(messages);
  

8. const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
  const msg = composeMessage.apply(orders[i], [i + 1]);
  messages.push(msg);
}

9. const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

const burgerShackComposer = composeMessage.bind(burgerShack);
const burgerShackMessage = burgerShackComposer('Поли');

10. const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


/МОДУЛЬ 5 

1. const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;

2. const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

3. function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  
}

4. function Car({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}


const myCar1 = new Car('Audi', 'Q3', 36000);

console.log(myCar1);

const myCar2 = new Car('BMW', 'X5', 58900);

console.log(myCar2);

const myCar3 = new Car('Nissan', 'Murano', 31700);

console.log(myCar3);

5. function Car({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const  myCar = new Car("Audi", "Q3", 36000);

Car.prototype.changePrice = function(newPrice) {
  this.price = newPrice;
};

Car.prototype.getPrice = function() {
  return this.price;
};

console.log(Car);


6. function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function (){
  return this.items
};

Storage.prototype.addItem = function(newItem) {
  this.items.push('Дроид')
};

Storage.prototype.removeItem = function() {
  this.items.splice(1,1)
};
// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

7. function StringBuilder(baseValue) { this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value
};

StringBuilder.prototype.padEnd = function (str) {
  this.value += str
};

StringBuilder.prototype.padStart = function (str) {
  this.value = str + this.value
};

StringBuilder.prototype.padBoth = function (str) {
  this.value = str + this.value + str
};


// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

8. class Car {
}

const myCar = new Car();


9. class Car {
  brand;
  model;
  price;


constructor ({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
 }
}

10. class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getPrice() {
    return this.price;
  }
  
  changePrice(newPrice) {
    this.price = newPrice;
  } 
}


11. class Car {
  #brand;
  
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getBrand(){
    return this.#brand;
  };
  
  changeBrand(newBrand){
    this.#brand = newBrand;
  };
}

12. class Storage {
  #items;
  
  constructor (items){
  this.#items = items;
}

  getItems(){
  return this.#items;
};

  addItem (newItem) {
  this.#items.push(newItem);
};

  removeItem (item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
  };
}

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


13. class StringBuilder {
  #value; 
  constructor (baseValue) {
  this.#value = baseValue;

}

 getValue() {
  return this.#value;
};

 padEnd(str) {
  this.#value += str;
};

 padStart(str) {
  this.#value = str + this.#value;
 };

 padBoth(str) {
  this.padStart(str);
  this.padEnd(str);
};
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

14. class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  };
  
  set brand(newBrand) {
    this.#brand = newBrand;
  };
  
  changeBrand(newBrand) {
    this.#brand = newBrand;
  };

  get model() {
    return this.#model;
  };
  
  set model(newModel) {
    this.#model = newModel;
  };

  updateModel(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}


15. class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > Car.MAX_PRICE) {
      return this.#price
    }
    this.#price = newPrice;
    
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

16. class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки

  static checkPrice(price) {
  if (price > Car.#MAX_PRICE) {
  return "Внимание! Цена превышает допустимую.";
  } 
  return "Всё хорошо, цена в порядке.";
  }
  

  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


17. class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки

class Admin extends User{
   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' }
  
}
 
18. class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;
  
  constructor({email, accessLevel}) {
    super(email);
    this.email = email;
    this.accessLevel = accessLevel;
    
  }

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  
 
  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

19. class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  blacklistedEmails = [];
  blacklist(email) {
    this.blacklistedEmails.push(email);
  };
  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;}
      return false;}
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 

MODUL 6

1. function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(function(orderedItem) {
  
    totalPrice += orderedItem;
  });

  // Пиши код выше этой строки
  return totalPrice;
}

2. 