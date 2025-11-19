Interview Questions (বাংলায় উত্তর)

1. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof হলো TypeScript-এর একটি খুব গুরুত্বপূর্ণ অপারেটর, যার কাজ হলো—
কোনো object type-এর সবগুলো key সংগ্রহ করে string literal union আকারে বের করে আনা।

উদাহরণ

interface Car {
brand: string;
model: string;
year: number;
}

type CarKeys = keyof Car;
// আউটপুট: "brand" | "model" | "year"

এখন আমরা এমন একটি ফাংশন বানাতে পারি, যেটি শুধুমাত্র Car-এর বৈধ key-গুলোই গ্রহণ করবে।

const myCar: Car = {
brand: "Toyota",
model: "Corolla",
year: 2020,
};

const getCarInfo = (car: Car, key: CarKeys) => {
return car[key];
};

console.log(getCarInfo(myCar, "brand"));
// আউটপুট: "Toyota"

2. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

enum হলো TypeScript-এর একটি ফিচার, যা দিয়ে
একটি নির্দিষ্ট সেটের constant মান সুন্দরভাবে সংগঠিত করে রাখা যায়।

এটি magic numbers বা random string মান ব্যবহার না করে কোডকে আরও readable ও নিরাপদ করে তোলে।

উদাহরণ Numeric Enum

Numeric enum-এ মান না দিলে TypeScript 0, 1, 2… এভাবে সংখ্যা সেট করে।

enum Status {
Pending, // 0
Processing, // 1
Completed // 2
}

const orderStatus: Status = Status.Processing;
console.log(orderStatus);
// Output: 1

উদাহরণ String Enum

String enum-এ প্রতিটি মানকে string হিসেবে দিতে হয়।
এগুলো debugging-friendly এবং readable।

enum Role {
Admin = "ADMIN",
User = "USER",
Guest = "GUEST"
}

const currentRole: Role = Role.Admin;
console.log(currentRole);
// Output: "ADMIN"
