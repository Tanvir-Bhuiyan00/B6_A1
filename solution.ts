type FormatValue = number | string | boolean;

const formatValue = (value: FormatValue): FormatValue => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return !value;
  }
};

// ------------

type GetLength = string | any[];

const getLength = (value: GetLength): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};

// -----------

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// ------------

type Items = {
  title: string;
  rating: number;
};

const filterByRating = (items: Items[]): Items[] => {
  return items.filter((item) => item.rating >= 4);
};

// ----------

type UserObj = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: UserObj[]): UserObj[] => {
  return users.filter((user) => user.isActive === true);
};

// ----------------

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const bookAvailable = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${bookAvailable}`
  );
};

// -----------

type UniqueValues = number | string;

const getUniqueValues = (
  arr1: UniqueValues[],
  arr2: UniqueValues[]
): UniqueValues[] => {
  const myArray: UniqueValues[] = [];

  const valueExists = (value: UniqueValues) => {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] === value) {
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!valueExists(arr1[i])) {
      myArray[myArray.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!valueExists(arr2[i])) {
      myArray[myArray.length] = arr2[i];
    }
  }

  return myArray;
};

//----------------

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  return products
    .map((product) => {
      const total = product.price * product.quantity;
      if (product.discount) {
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((acc, curr) => acc + curr, 0);
};
