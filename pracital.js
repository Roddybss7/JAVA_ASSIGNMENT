// Objects in JavaScript  Practical Questions: Worked Solutions

{
  console.log("--- Q1 ---");
  const student = {
    name: "Ada",
    age: 17,
    isPresent: true,
    greet() {
      console.log("Hi, I am " + this.name);
    },
  };
  console.log(student.name);   
  console.log(student["age"]); 
  student.greet();
}


{
  console.log("--- Q2 ---");
  const phone = {
    brand: "Tecno",
    model: "Spark 10",
    price: 120000,
    describe() {
      return this.brand + " " + this.model + " costs ₦" + this.price;
    },
  };
  console.log(phone.describe());
}


{
  console.log("--- Q3 ---");
  const car = {
    make: "Toyota",
    "top speed": 180,
  };
  const key = "make";
  console.log(car[key]);         
  console.log(car["top speed"]);  
}


{
  console.log("--- Q4 ---");
  function createStudent(name, className) {
    return {
      name: name,
      className: className,
      intro() {
        return "I am " + this.name + " from " + this.className;
      },
    };
  }
  const s1 = createStudent("Ada", "SS1");
  const s2 = createStudent("Bayo", "SS2");
  const s3 = createStudent("Chidi", "SS3");
  console.log(s1.intro());
  console.log(s2.intro());
  console.log(s3.intro());
}

{
  console.log("--- Q5 ---");
  function createProduct(name, price) {
    return {
      name: name,
      price: price,
      showPrice() {
        return this.name + " costs ₦" + this.price;
      },
      discountedPrice(percent) {
        return this.price - (this.price * percent) / 100;
      },
    };
  }
  const sneakers = createProduct("Sneakers", 25000);
  const backpack = createProduct("Backpack", 18000);
  console.log(sneakers.showPrice());
  console.log(sneakers.discountedPrice(10));
  console.log(backpack.discountedPrice(20));
}




{
  console.log("--- Q6 ---");
  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.describe = function () {
      return this.title + " by " + this.author + " (" + this.pages + " pages)";
    };
  }
  const book1 = new Book("Learn JavaScript", "Ada Obi", 250);
  const book2 = new Book("Mastering CSS", "Bayo Ade", 180);
  console.log(book1.describe());
  console.log(book2.describe());
}


{
  console.log("--- Q7 ---");
  const user = { name: "Chidi" };
  user.email = "chidi@example.com"; 
  user.name = "Chidi O.";         
  delete user.email;               
  console.log(user);
}

{
  console.log("--- Q8 ---");
  const phone = { brand: "Infinix" };
  phone.brand = "Samsung";
  console.log(phone.brand);
  try {
    phone = { brand: "Nokia" };
  } catch (error) {
    console.log(error.message);
  }
}



{
  console.log("--- Q9 ---");
  function Product(name) {
    this.name = name;
  }
  const shoe = new Product("Shoe");
  console.log(shoe.constructor === Product);   // true
  console.log({}.constructor === Object);      // true
  console.log("abc".constructor === String);   // true
  console.log([].constructor === Array);       // true
  console.log((5).constructor === Number);     // true
}
// Output:
// true
// true
// true
// true
// true


{
  console.log("--- Q10 ---");
  function Product(name, price) {
    this.name = name;
    this.price = price;
    this.showPrice = function () {
      return this.name + " costs ₦" + this.price;
    };
  }
  const sneakers = new Product("Sneakers", 25000);
  const backpack = new Product("Backpack", 18000);
  const cap = new Product("Cap", 3000);

  sneakers.inStock = 10;     
  cap.price = 3500;         
  backpack.discount = 15;    
  delete backpack.discount;  

  console.log(sneakers.inStock);
  console.log(cap.showPrice());
  console.log(backpack.discount);
  console.log(backpack.constructor === Product);
}
