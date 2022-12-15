// var fullName = 'Nguyen Dinh Khoi';
// var age = 20;
// alert (fullName);
// alert (age);
// console.log(fullName)
// prompt('Xac nhan du tuoi');
// setTimeout(function () {
// alert('Thong bao')
// },1000)
// var a = 6;
// var b = 3;
// var c = a % b;
// a += 2;
// console.log(a++);
// console.log(a);
// var number = ++a *3 - --a;//21 - 6
// console.log (number)
// console.log (++a);
// console.log (a);
// var Name = 'Khoi';
// Name += ' Dinh'
// // 
// var a =2;
// var b = 5;
// var isSuccess = a > b;
// console.log (isSuccess);
// 
// var a = 1;
// var b = 2;
// var c = 4.3;

// var fullName = 'Khoi Dinh';

// var isSuccess = true;

// var age;

// var isNull = null;

// var id = Symbol ('id');

// var id2 = Symbol ('id');
// // console.log(id === id2);
// var myFunction = function ()
// {
//     alert ('Xin chao cac ban');
// }
// // myFunction();
// console.log (typeof myFunction);

// var myObject = 
// {
//     name : 'Dinh Khoi',
//     age : 20,
//     address : 'HaNoi'
// }
// console.log ('myObject', myObject);
// var myArray = [
//     'JavaScript',
//     'PHP',
//     'Khoi'
// ];
// console.log (myArray);
// var a = '1';
// var b =1;
// // console.log (a !== b)

// var a = 1;
// var b = 2;
// var result = 'A' && 'B' && null;
// // console.log (result);
// function showDialog(message) {
//     // alert (message); 
// }
// // showDialog(36344);

// function writeLog () {
//     // console.log (arguments)
//     var myString = '';
//     for (var param of arguments)
//     {
//         myString += `${param} - ` 
//     } 
//     // console.log (myString);
// }
// // writeLog ('log1', 'log2', 'log3')
// // var isConfirm =  confirm ('Message');
// // console.log (isConfirm);
// function  cong (a,b)
// {
//     return a + b;
// }
// var result = cong(2,8);
// console.log(result);
// function Message ()
// { function Message2 (){
//     console.log ('Khoi');
// }
// Message2()}
// Message ();
// function showMessage()
// {
//     console.log ('kjebke');
// }
// showMessage ();
// var showMessage2 = function()
// {
//     console.log ('ebvibf');
// }
// showMessage2()
// var firstName = 'Dinh';
// var lastName = 'Khoi';
// // console.log (`Toi la ${firstName} ${lastName}`);
// var KKK = '   jebivbjebeb   ';
// // console.log(KKK.indexOf('e'))
// // console.log (KKK.slice(-6, -1));
// // console.log (KKK.replace(/e/g, 'rrrrrrrrr'));
// // console.log(KKK.toUpperCase())
// // console.log(KKK.trim())

// var language = 'Javascript';
// // console.log (language.split(''));
// const myString2 = 'Dinh Khoi';
// // console.log (typeof myString2[10]);

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// function strToArray(str) {  
//     return str = coursesStr.split(', ');
//     }

// Expected results
// console.log(strToArray(coursesStr)) 
// var age = 'fgdsfg';
// var PI = 3.14;
// // console.log (isNaN(age));

// // var otherNumber = new Number(9);
// // var r = 20/4;
// // console.log (PI.toFixed(4));
// var AAA = 'Nguyen Dinh Khoi'
// function TachHoDem (tach)
// {
//    console.log(tach.trim());
//    console.log(tach.substring(0, tach.indexOf(' ')));
// //    console.log (tach.indexOf(' ')+1, tach.lastIndexOf(' '))
//    console.log (tach.substring(tach.lastIndexOf(' ') +1))
//    console.log (tach.substring(tach.indexOf(' ')+1 , tach.lastIndexOf(' ')))
//    return tach;
// }
// // console.log (TachHoDem(AAA))
// var languages =['Javascript', 'PHP', 'Ruby'];
// console.log (languages.toString());
// console.log (languages.join(' '));
// console.log (languages.pop());
// console.log (languages.push('tttt'));
// console.log (languages.shift());
// console.log (languages.unshift(75456363));
// languages.splice(1,1, 'dsgd')
// var languages2 =['edfgeg', 'egegd']
// console.log(languages.concat(languages2))
// console.log(languages.slice(-1))
// console.log (languages);


// var car = ['hhh', 'fsg', 'fgweg']
// var result = joinWithCharactor (car, ' - ')
// function joinWithCharactor(a, b)
// {
//     return a.join(b);
// }
// // console.log (result);
// // console.log (car);
// var emailKey = 'email';
// var info = {
//     name : 'Dinh Khoi',
//     age: 18, 
//     address: 'VN',
//     [emailKey]: 'Khoidinh@gmail.com',
//     getName: function ()
//     {
//         return this.name;
//     }
// }
// delete info.age;
// // info.email = 'dinhkhoi@gmail.com'
// var key = 'address';
// // console.log(info)
// // console.log(info[key]);
// function User (firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName= function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// User.prototype.classname = 'ève';
// User.prototype.getClassName = function()
// {
//     return this.classname;
// }

// var user = new User('Dinh', 'Khoi', 'Avatar');
// var user2 = new User('Son', 'Dang', 'Avatar');

// // author.title='Chia se';
// user.ff='hahaaha';
// // console.log (user);
// // console.log(author.getName());
// // console.log(user.getName());
// // console.log(user.classname);
// // console.log(user2.getClassName());

// var date = new  Date();
// // console.log (date)
// var year = date.getFullYear();
// var month = date.getMonth();
// var day = date.getDate() +1;
// var Now = date.getTime();
// // console.log (`${day} / ${month} / ${year}`);
// // console.log (`${month}`);
// var date = new Date()
// // var getNextYear = date.getFullYear() +1;
// // console.log (`${getNextYear}`);
// function getNextYear ()
// {
//     return date.getFullYear() +1;
// }
// console.log (getNextYear());
// console.log(Math.maxin (42344,243,2545,6,4747,4))

// console.log (Math.random(5555))

// var arr =[23532,2636,35,55]
// console.log (arr.length)
// function getRandomItem (a)
// {
//     // a= []
//     // return  a = Math.random();
  
//     return a [ Math.floor(Math.random() * a.length)]

// }
// console.log(getRandomItem(arr));
// var date = 2
// switch(date)
// {
//     case 2: console.log ('Hôm nay là thứ 2');
//     break;
//     case 3: console.log ('Hôm nay là thứ 3');
//     break;
//     case 4: console.log ('Hôm nay là thứ 4');
//     break;
//     case 5: console.log ('Hôm nay là thứ 5');
//     break;
//     case 6: console.log ('Hôm nay là thứ 6');
//     break;
//     case 7: console.log ('Hôm nay là thứ 7');
//     break;
//     case 8: console.log ('Hôm nay là thứ Chủ Nhật');
//     break;
// }

// if (date > 1)
// {
//      console.log ('Hôm nay là thứ 2');
// }
// else
// {
//       console.log ('Những ngày còn lại')
// }
// var course = 
// {
//     name: 'Javascript',
//     coin: 250
// }
// if (course.coin > 0)
// {
//     console.log (`${course.coin} Coins`);
// }
// else 
// {
//     console.log (`Free`);
// }
// var result = course.coin > 0? `${course.coin} Coins`: `Free`;
// console.log(result);
// var i =1;
// var myArray = [
//     'Javascript',
//     'PHP',
//     'Java',
//     'Khoi',
//     'sfsg'
// ];
// var arrayLength = myArray.length;
// for ( i=0 ; i< arrayLength; i ++)
// {
//     // console.log (myArray[i]);
// }

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// function getTotal(a)
// {
//     var total = 0;
//     for (var i = 0; i < a.length; i++)
//     {
//         total += a[i].price;
//     }
//     return total;
// }

// Expected results:
// getTotal(orders) // Output: 8700000


// Làm bài
// function getRandNumbers (min, max, length)
// {
//     var a =[]
//     for (var i =0; i < length; i++)
//     {
//         a[i] = Math.random() * (max-min) + min;
//     }
//     return a;
// }
// console.log  (getRandNumbers(1,2,3));
// var myInfo = {
//     name: 'Khoi',
//     age: 20,
//     address: 'Ha Noi'
// }
// for (var key in myInfo)
// {
//     // console.log (`${key}`)
// }
// var language = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Java'
// ]
// for (var f in language)
// {
//     console.log(`${f}`)
// }
// function run(object) {
//     var a = []
//     for (var key in object)
//     {
//         a.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
//     }
//     return a;
// }

// Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// var languages = {name: 'Khoi'}
//     // 'Javascript'
//     // 'PHP',
//     // 'Java'

// for (var value of Object.values(languages))
// {
//     console.log (value);
// }
// var i = 0;
// while (i < 100)
// {
//     i++;
    // console.log (i);    
// }
// var myArray = 
// [
//     'Khoi',
//     'Dinh'
// ]
// var i = 0;
// do 
// {
//     console.log (myArray[i])
//     i++;
// }
// while (i < myArray.length)
// var i = 0;
// var isSuccess = false;
// do {
//     i++;
//     console.log ('Nạp thẻ lần ' + i);
//     if (false)
//     {
//         isSuccess = true;
//     }
// }
// while (!isSuccess && i <= 3);
// for (var i = 0; i < 10; i++)
// {
//     if (i % 2 !==0)
//     {
//         continue;        
//     }

//     console.log (i);
//     // if (i >= 5)
//     // {
//     //     break;
//     // }
// }
// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];
// for (var i = 0; i < myArray.length; i++)
// {
//     // console.log (myArray[i]);
//     for (var j =0; j < myArray[i].length; j ++)
//     {
//         console.log (myArray[i][j]);
//     }
// }

// for (i = 100; i >0; i--)
// {
//     if (i % 5 !==0)
//     {
//         continue;
//     }

//     console.log (i);
// }
// for (var i =100; i >=0; i -=5)
// {
//     console.log (i);
// }
// var array = ['a', 'b', 'c', 'd', 'a', 'a', 'b'];
// console.log ([...(new Set (array))]);
// function DeQuy (num){
//     if (num <0)
//     {
//         return;
//     }
//     DeQuy();
// }
// DeQuy();
// function countdown (number)
// {
//     if (number > 0)
//     {
//         console.log (number);
//         return countdown (number -1);
//     }
//     return number;
// }
// countdown (10)
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 111
//     },
//     {
//         id: 7,
//         name: 'Ruby',
//         coin: 11111
//     }

// ]

// courses.forEach(function (course, index)
// {
//     console.log (index, course)
// });
// var isFree = courses.every(function(course, index)
// {
//     console.log(index);
//     return course.coin ===0;
// });
// console.log (isFree);
// var isFree = courses.some(function(course, index)
// {
//     console.log(index);
//     return course.coin ===0;
// });
// console.log (isFree);
// var isFree = courses.find(function(course, index)
// {
//     // console.log(index);
//     return course.name == 'Ruby';
// });
// console.log (isFree);
// var isFree = courses.filter(function(course, index)
// {
//     // console.log(index);
//     return course.name === 'Ruby';
// });
// console.log (isFree);
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     }
// ]
// function getMostFavoriteSport(a)
// {
//     // var b = []
//     // for (var i =0; i< a.length; i++)
//     // {
//     //     if (a[i].like >5)
//     //     {
//     //         b.push(a[i]);
//     //     }
//     // }
//     // return b;
//     return a.filter (function (b)
//     {
//         return b.like >5
//     });
// }
// // Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 111
//     },
//     {
//         id: 7,
//         name: 'Ruby',
//         coin: 11111
//     }

// ]
// var totalCoin = courses.reduce(function(total, currentValue)
// {
//     return total + currentValue.coin;
// },0)
// console.log(totalCoin);

// function courseHandler(course)
// {
//     // console.log (course);
//     return {
//         id: course.id,
//         name: `Khoa hoc ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia ${course.coin}`
//     };
// }
// var newCourses = courses.map(courseHandler);
// console.log (newCourses);
// var a = 0;
// for (var b of courses)
// {
//     a += b.coin;
// }
// console.log(a);
// var i = 0
// function coinHandler(accumulator, currentValue, currentIndex, originArray){
// //     i++;
// //     console.table({
// //         'Lượt chạy: ': i,
// //         'Biến lưu trữ: ': accumulator
// // });
// // console.log (currentValue);
// // return 100;
// return accumulator + currentValue.coin;
// }
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log (totalCoin);


// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold (a)
// {
// //   function total (accumulator, currentValue){
// //     return accumulator + currentValue.gold }
// //  return sports.reduce (total,0);
// return a.reduce (function (accumulator, currentValue){
//     return accumulator + currentValue.gold;
// },0);
// }
// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23
// var depthArray = [1,2,[3,4],5,6,[7,8,9]];
// var flatArray = depthArray.reduce (function (flatOutput, depthItem)
// { 
//     return flatOutput.concat(depthItem)
// }, []);

// console.log (flatArray); 
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
//   function calculateRating (a)
//   {
//     var nolan=  a.filter (function  (b)
//     {
//         return b.Director ==='Christopher Nolan'
//     });
//     var totalIMDB = nolan.reduce (function (c,d){
//         return c + Number(d.imdbRating);
//     },0);
//     // console.log (nolan.length)
//     // console.log (totalIMDB);
//     return totalIMDB / nolan.length;
//     // var b= []
//     // for (var i =0; i< a.length; i++)
//     // {
//     //     if (a[i].Director=== 'Christopher Nolan')
//     //     {
//     //         b.push(a[i])
//     //     }
//     // }
//     // return b;
//   }
  
//   // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675
// Array.prototype.reduce2 = function (callback, result)
// {
//     for (var i = 0; i< this.length; i++)
//     {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }

// var numbers = [1,2,3,4,5]
// var result =  numbers.reduce2 ((total, number) => { 
//     return total + number 
// },0); 
// // var result = numbers.reduce (callback, initialValue)
// console.log (result); // Truyền initial value


// Array.prototype.reduce2 = function (callback, result)
// {
//     var i = 0
//     if (arguments <2)
//     {
//         i=0;
//         result = this[0];

//     }
//     for (; i< this.length; i++)
//     {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }

// var numbers = [1,2,3,4,5]
// var result =  numbers.reduce2 ((total, number, index, array) => { 
//     // console.table (total, number, index, array)
//     return total + number 
// },10); 
// var result = numbers.reduce (callback, initialValue)
// console.log (result); // Không truyền initial value


  // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// function arrToObj (a)
// {
//     var result = a.reduce(function(obj, value)
//     {
//         obj[value[0]]= value[1];
//         return obj;
//     }, {});
//     return result;
// }
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
// console.log (Array.prototype.includes)

// var title = 'kkkk jjjj';
// console.log (title.includes ('jjjj'));
// var courses = [
//     'Java',
//     'Python',
//     'PHP'
// ];
// console.log (courses.includes ('Java'));
  
// function myFunction(a){
//     if (typeof a === 'function')
//     {a (911);}
// }  
// function myCallBack (value){
//     console.log ('Call:', value);
// }
// myFunction (myCallBack);

function sumCb(a, b) {
    return a +b;
}
function subCb (a,b)
{
    return a - b;
}
function multiCb (a,b)
{
    return a*b;
}
function divCb (a,b)
{
    return a/b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
// console.log(caculate(1, 2, sumCb)) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

// Array.prototype.map2 = function(callback){
//     var output = [], arrayLength = this.length
//     for (var i =0; i <arrayLength; i++){
//        var result= callback (this[i],i);
//     //    console.log (result);
//     output.push (result);
//     }
//     return output;
//     // console.log (this);
// }
//  var courses = [
//     'Java',
//     'Python',
//     'PHP'
//  ]
// // courses.map2(function (course, index){
// //     console.log (index, course)
// // })

// courses.map (function (course)
// {
//     console.log (course);
// });
// var htmls = courses.map2 (function(course){
//     return `<h2>${course}<h2>`
// })
// console.log (htmls.join(' '));
// console.log (htmls)

// Array.prototype.myMap = function(cb) {
//     var output = [], arrayLength = this.length;
//     for (var i =0; i <arrayLength; i++)
//     {
//         var result = cb(this[i], i)
//         output.push(result);
//     }
//     return output;
// }

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

// var courses = {
//     k: 'Javascript',
//     j: 'PHP'
// }
// courses.length =10;
// console.log (courses);
// for (var i =0; i <courses.length; ++i)
// {
//     console.log (courses[i])
// }
// for (var index in courses)
// {
//     console.log (courses[index]);
// }
// for (var index of courses)
// {
//     console.log (index.j);
// }

// var courses = [
//   'Javascript',
//   'PHP',
//   'Ruby'
// ]
// // courses.forEach (function (course, index, array) {
// //   console.log (course, index, array)
// // });
// Array.prototype.forEach2 = function (callback)
// {
//   for (var index in this)
//   {
//     // this.hasOwnProperty (index)
//     //  console.log (index,   this.hasOwnProperty (index) );
//     if ( this.hasOwnProperty (index))
//     {
//       callback (this[index], index, this)
//     }
//   }
// }


// courses.forEach2 (function (course, index, array) {
//   console.log (course, index, array)
// });

// var courses = [
//   {
//     name: 'Javascript',
//     coin: 680
//   },
//   {
//     name: 'PHP',
//     coin: 860
//   },
//   {
//     name: 'Ruby',
//     coin: 980
//   }
// ]
// var coinFilter = courses.filter(function (course, index, array) {
//   return course.coin > 700;
// });
// console.log (coinFilter);

// courses.filter(function (a){
//   if (a.coin >700)
//   {
//     console.log (a);
//   }
// })
// Array.prototype.filter2 = function (callback) {
//   var output = [];
//   for (var index in this)
//   {
//     if (this.hasOwnProperty(index))
//     {
//       var results = callback (this[index], index, this)
//       if (results)
//       {
//         output.push (this[index]);
//       }
//     }
//   }
//   return output;
// }
// var coinFilter = courses.filter2(function (course, index, array) {
// // console.log (course,index,array);
//   return course.coin > 700;
// });
// console.log (coinFilter);
// Array.prototype.myFilter = function(cb) {
//   var output = []
//     for (var index in this)
//     {
//       if (this.hasOwnProperty(index))
//       {
//         var result = cb (this[index], index, this)
//         if (result)
//         {
//           output.push (this[index])
//         }
//       }
//     }
//     return output;
//   }

/**
Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]
 */

// Array.prototype.some2 = function (callback)
// {
//   for (var index in this)
//   {
//     if (this.hasOwnProperty(index))
//     {
//       if (callback (this[index], index, this))
//       {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// var courses = [
//   {
//     name: 'Javascript',
//     coin: 680,
//     isFinish: true
//   },
//   {
//     name: 'PHP',
//     coin: 860,
//     isFinish: false
//   },
//   {
//     name: 'Ruby',
//     coin: 980,
//     isFinish: false
//   }
// ];
// var result = courses.some2(function (course, index, array)
// {
//   return course.isFinish;
// });
// console.log (result);
// var result = courses.some(function (course, index, array)
// {
//   return course.isFinish;
// });
// console.log (result);

// Array.prototype.mySome = function(cb) {
//   var result = false;  
//   for (var index in this)
//     {
//       if (this.hasOwnProperty(index))
//       {
//         if (cb[index], index, this)
//         {
//           return result= true;
//         }
//       }
//     }
//     return result;
// }


/**
Expected results:

const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: true
 */

// Array.prototype.every2 = function (callback)
// {
//   var output = true;
//   for (var index in courses)
//   {
//     if (this.hasOwnProperty(index))
//     {
//       var result = callback (this[index], index, this)
//       if (!result)
//       {
//         output = false;
//         break;
//       }
//     }
//   }
//   return output;
// }
// var courses = [
//   {
//     name: 'Javascript',
//     coin: 680,
//     isFinish: true
//   },
//   {
//     name: 'PHP',
//     coin: 860,
//     isFinish: false
//   },
//   {
//     name: 'Ruby',
//     coin: 980,
//     isFinish: false
//   }
// ];
// var result = courses.every2(function (course, index, array)
// {
//   return course.isFinish;
// });
// console.log (result)

//----------------------------------
/**\
 * HTML DOM (document object model)
 * Element: ID, Class, tag, CSS selector, HTML collection
 * Attribute
 * Text
 */
//----------------------------------
// Javascript
// var headingNode =  document.getElementById('heading');
// console.log ({
//   element: headingNode
// });
// var headingNode = document.getElementsByClassName('heading');
// console.log (headingNode);
// var headingNode = document.getElementsByTagName('h1');
// console.log (headingNode);
// var headingNode = document.querySelector('html .box .heading2');
// console.log (headingNode);

// var listItemNode = document.querySelector('.box-2');
// console.log (listItemNode);
// var boxNode = document.querySelector('.box-1');
// console.log (boxNode);
// console.log (boxNode.getElementsByTagName('li'));
// console.log (boxNode.getElementsByTagName('p'));
// console.log (boxNode.querySelector('p'));

// var headingElement = document.querySelector('h1');
// console.log (headingElement);
// headingElement.title = 'Heading';
// headingElement.setAttribute ('href', 'heading')
// headingElement.getAttribute ('class')
// console.log (headingElement.getAttribute ('class'))
// headingElement.title = 'Title test';
// console.log (headingElement.getAttribute ('title'))
// alert (headingElement.title);
// headingElement.setAttribute('title', 'height');
// console.log(headingElement.title);

// var headingElement = document.querySelector ('h1');
// console.log (headingElement.innerText);
// console.log (headingElement.textContent);
// headingElement.textContent = 'New Heading';

// var boxElement = document.querySelector ('div')
// console.log (boxElement);
// boxElement.innerHTML = '<h1>Heading new</h1>';
// console.log (document.querySelector('h1').textContent)
// console.log (boxElement.outerHTML)
// boxElement.outerHTML = '<span>Heading</span>';
// console.log (boxElement.innerHTML);

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
// function render (courses) {
//   var a = courses.join ('</li><li>')
//   var list = `<li>${a}</li>`
//   document.querySelector('ul').innerHTML = list;
// }
// console.log (render(courses));

// function render(courses) {
//   var coursesElement = courses.map(function (course) {
//       return `<li>${course}</li>`
//   })

//   document.querySelector('ul').innerHTML = coursesElement

// }
// render(courses);

// var boxElement = document.querySelector ('.box')
// // boxElement.style.width = '100px';
// // boxElement.style.height = '200px';
// // boxElement.style.backgroundColor = 'red';
// Object.assign(boxElement.style, {
//   width: '200px',
//   height: '100px',
//   backgroundColor: 'red'
// })
// console.log (boxElement.style.width);
// boxElement.style.color = 'green'
// console.log (boxElement.style.color);

// var boxElement = document.querySelector ('.box')
// console.log (boxElement.classList);
// boxElement.classList.add ('blue');
// boxElement.classList.remove ('red');
// setTimeout (() => {
//   boxElement.classList.toggle ('blue');
// }, 2000)
// setInterval(() => {
// boxElement.classList.toggle ('red');
// },100)

// var h1Element = document.querySelectorAll ('h1');
// h1Element.onclick = function ()
// {
//   console.log (Math.random());
// }
// for (var i = 0; i < h1Element.length; i++)
// {
//   h1Element[i].onclick = function (e){
//     console.log (e.target);
//   }
// }
// var h1Color = document.querySelector ('h1')
// h1Color.onclick= function (a)
// {
//   h1Color.style.color= "red";
// }

// var inputValue ;
// var inputElement = document.querySelector ('input');
// inputElement.oninput = function (e)
// {
//   inputValue =e.target.value;
//   console.log (inputValue);
// }

// var inputElement = document.querySelector ('input[type="checkbox"]');
// inputElement.onchange = function (e)
// {
//   console.log (e.target.checked);
// }
// var inputElement = document.querySelector ('select');
// inputElement.onchange = function (e)
// {
//   console.log (e.target.value);
// }
// var inputElement = document.querySelector ('input');
// inputElement.onkeyup = function (e)
// {
//   // console.log (e.which);
//   switch (e.which){
//   case 27: console.log ('Exit');
//   break;
//   case 8: console.log ('Backspace');
//   break;
// }
// }
// document.onkeyup = function (e){
//   // console.log (e.target.which);
//   switch (e.which)
//   {
//     case 27: console.log ('Exit');
//     break;
//     case 8: console.log ('Send chat');
//     break;
//   }
// }

// var aElement = document.links;
// // console.log (aElement)
// for (var i = 0; i < aElement.length; ++i)
// {
//   aElement[i].onclick = function (e){
//     // console.log (e.target.href);
//     if (!e.target.href.startsWith ('https://fullstack.edu.vn/'))
//     {
//       e.preventDefault();
//     }
//   }
// }
// var ulElement = document.querySelector ('ul');
// ulElement.onmousedown = function (e)
// {
//   e.preventDefault ();
// }
// ulElement.onclick = function (e)
// {
//   console.log (e.target);
// }
// document.querySelector ('div').onclick = function ()
// {
//   console.log ('DIV');
// }
// document.querySelector ('button').onclick = function (e)
// {
//   e.stopPropagation();
//   console.log ('Click me');
// }

// var btn = document.getElementById ('btn');
// function viec1 (){
//   console.log ('Việc 1');
// }
// btn.addEventListener ('click', viec1);
// setTimeout (function () {
// btn.removeEventListener ('click',viec1)
// },3000);
// // console.log (btn);
// btn.onclick = function ()
// {
//   console.log ('viec 1');
//   console.log ('viec 2');
//   alert ('viec 3');
// }
// btn.addEventListener('click', function (e)
// {
//     console.log (Math.random ());
// });
// btn.addEventListener('click', function (e)
// {
//     console.log (Math.random ());
// });
// btn.addEventListener('click', function (e)
// {
//     console.log (Math.random ());
// });
// btn.addEventListener('click', function (e)
// {
//     console.log (Math.random ());
// });

/**JSON
 * Là một định dạng dữ liệu (chuỗi)
 * Javascript Object Notation
 * JSON: Number, Boolean, Null, Array, Object
 * Thao tác mã hóa/ giải mã (encode/decode)
 * Stringify: Từ Javascript types => JSON
 * Parse: Từ JSON => Javascript types
 */
// var json = '["Javascript","PHP"]';
// var json = '{"name":"Khoi Dinh", "age":20}';
// var a = '1';
// console.log (JSON.parse(a));
// console.log (JSON.stringify([
//   'Java',
//   'PHP'
// ]));

/**Promise
 * Sync / Async 
 * setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
 * Callback
 */
// setTimeout(function() {
//   console.log('Dòng này sẽ in ra sau')
// }, 0)
// // setTimeout là tác vụ bất động bộ (async)

// console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)
/**Promise
 * Callback hell
 * Pyramif of doom
 */
// setTimeout(function (){
//   console.log (1);
//   setTimeout(function (){
//     console.log (2);
//     setTimeout(function (){
//       console.log (3);
//     },1000);
//   },1000);
// },1000);

/**Promise
 *
 */
// var promise = new Promise(
//   //Executor
//   function (resolve, reject) {
// //Logic
// //Thành công: resolve()
// //Thất bại: reject()
// resolve ([
//   {
//     id: 1,
//     name: 'Khoi'
//   }
// ]);
//   }
// )
// promise
// .then(function (courses){
// console.log (courses);
// })
// .catch(function (){
//   console.log ('Fail');
// })
// .finally(function (){
//   console.log ('Done');
// })
//Promisr gồm 3 trạng thái: pending (đang chờ thành xông hay thất bại),
// fullfilled(Thành công), rejected(Thất bại)
/**Promise là một khái niệm sinh ra để xử lý các thao tác bất đồng bộ
 * và trc khi có promise thì sử dụng callback - khó nhìn và khó hiểu gây ra
 * tình trạng call backhell
 * => sinh ra promise để khắc phục tình trạng đó, code dễ hiểu hơn
 * Để tạo ra 1 promise thì tạo ra new Promise
 * bên trong có 1 executor function gồm 2 tham số dạng hàm là resole và reject
 * thao tác xử lý thành công thì gọi hàm resolve, còn thao tác xử lý thất bại
 * ta gọi hàm reject
 * Khi sử dụng promise sẽ qua các phương thức then hoặc catch đều nhận callback function
 * Then được thực thi khi promise resolve còn catch được thực thi khi promise reject
 */

//Promise chain
// var promise = new Promise(
//   //Executor
//   function (resolve, reject) {
// //Logic
// //Thành công: resolve()
// //Thất bại: reject()
// resolve ();
//   }
// )
// promise
//   .then(function (){
//     return 1
// })
//   .then(function (data){ 
//   console.log (data);
//   return 2
// })
// //   .then(function (data){
// //   console.log (data);
// //   return 3
// // })
// //   .then(function (data){
// //   console.log (data);
// // })
//   .catch(function (){
//   console.log ('Fail');
// })
//   .finally(function (){
//   console.log ('Done');
// })
// function sleep (ms)
// {
//   return new Promise(function (resolve){
//     setTimeout (resolve,ms);
//   });
// }
// sleep (1000)
// .then (function (){
//   console.log (1);
//   return sleep (1000);
// })
// .then (function (){
//   console.log (2);
//   return sleep (1000);
// })
// .then (function (){
//   console.log (3);
//   return sleep (1000);
// })
// .then (function (){
//   console.log (4);
//   return sleep (1000);
// })
// function sleep (ms)
// {
//   return new Promise(function (resolve){
//     setTimeout (resolve,ms);
//   });
// }
// sleep (1000)
// .then (function (){
//   console.log (1);
//   return sleep (1000);
// })
// .then (function (){
//   console.log (2);
//   return new Promise (function (resole, reject){
//     reject ('Có lỗi');
//   });
// })
// .then (function (){
//   console.log (3);
//   return sleep (1000);
// })
// .then (function (){
//   console.log (4);
//   return sleep (1000);
// })

// .catch(function (err)
// {
//   console.log (err);
// })

/**Promise.resolve
 * Promise.reject
 * Promise.all 
 */
//  var promise = new Promise (function (resolve, reject)
//  {
//   // resolve ('Success')
//   reject ('Fail')
//  })
// var promise = Promise.resolve ('Success')
// promise
// .then (function (result)
// {
//   console.log ('result: ', result);
// })
// .catch (function (result)
// {
//   console.log ('result: ', result)
// })

// var promise1 = new Promise (function (resolve){
//   setTimeout (function (){
//     resolve ([1]);
//   },2000)
// })
// var promise2 = new Promise (function (resolve){
//   setTimeout (function (){
//     resolve ([2,3]);
//   },4000)
// })
// Promise.all ([promise1,promise2])
// .then (function (result){
//   var a = result[0];
//   var b = result[1];

//   console.log (a.concat (b))
// })

//Promise
// var users = [
//   {
//     id: 1,
//     name: 'Khoi'
//   },
//   {
//     id: 2,
//     name: 'Dinh'
//   },
//   {
//     id: 3,
//     name: 'A'
//   }
// ];
// var comments = [
//   {
//     id:1,
//     user_id: 1,
//     content:'Anh chưa ra video :('
//   },
//   {
//     id: 2,
//     user_id: 2,
//     content: 'Vừa ra xong'
//   }
// ];
// function getComments(){
//   return new Promise (function (resolve){
//     setTimeout (function (){
//       resolve (comments);
//     },1000)
//   })
// }

// function getUsersByIds (userIds){

// }

// getComments ()
// .then (function (comments)
// {
//   // console.log (comments);
//   var userIds = comments.map(function (comment)
//   {
//     return comment.user_id
//   });
//   console.log (userIds);
// })

//Fetch
/**1. Front- end: Xây dựng giao diện người dùng
 * 2. Back- end: Xây dựng logic xử lý + cơ sở dữ liệu
 */
// var postApi = 'https://jsonplaceholder.typicode.com/posts'
// fetch (postApi)
//   // .then(function(response){
//   //   return response.json();
//   // })
//   //   .then(function (posts)
//   // {
//   //   console.log (posts);
//   // })
//   .then (function (response){
//     return response.json ();
//   })
//   .then (function (posts)
//   {
//     var htmls = posts.map (function (post){
//       return `<li>
//       <h2>${post.id}</h2>
//       <p>${post.body}</p>
//       </li>`
//     })
//     var html = htmls.join ('');
//     document.getElementById ('post-block').innerHTML = html;
//   })

//JSON server: API server (fake) / MockAPI
// var courseAPI = "http://localhost:3000/courses"
// fetch(courseAPI)
// .then (function (response){
//   return response.json();
// })
// .then (function (course){
//   console.log (course);
// })

/**CRUD
 * Create => Post
 * Read => Get
 * Update => Put/Patch
 * Delete => Delete
 */
// Postman




// var listCourses = document.querySelector ('ul');
var coursesApi = 'http://localhost:3000/courses';
function start()
{
// getCourses(function (courses)
// {
//   // console.log (courses);
//   renderCourses (courses);
// });
getCourses (renderCourses);
handleCreateForm ();
}
start ();

function getCourses (callback){
  fetch(coursesApi)
  .then (function (response){
    return response.json()
  })
  .then (callback);
}

function createCourse (data, callback){
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }
  fetch (coursesApi, options)
  .then (function (response){
    response.json();
  })
  .then (callback);
}

function handleDeleteCourse (id) {
  var options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'},
  }
  fetch (coursesApi + '/' + id, options)
  .then (function (response){
    response.json();
  })
  .then (function () {
    // getCourses (renderCourses);
    var courseItem = document.querySelector ('.course-item-' + id)
    if (courseItem){
      courseItem.remove();
    }
  });
}

function handleFixCourse (id, name, description){
  let nameCourse = document.getElementById('name_input')
  let desCourse= document.getElementById('description_input')
  nameCourse.value = name
  desCourse.value = description
  let idCourse = document.getElementById('123')
  idCourse.value = id;
}

function editBtn (){
  let idName = document.getElementById('123').value
  let desName= document.getElementById('description_input').value
  let nameName =document.getElementById('name_input').value
  
  let data = {
    id: idName,
    name: nameName,
    description: desName
  }
  var options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }
  fetch (coursesApi + '/' + idName, options)
  .then (function (response){
    response.json();
  })
  .then (function () {
    // getCourses (renderCourses);
    var courseItem = document.querySelector ('.course-item-' + idName)
    courseItem.innerHTML = `
    <li class="course-item-${idName}">
      <h4> ${nameName}</h4>
      <p> ${desName}</p>
      <button onclick = "handleDeleteCourse(${idName})"> Xóa </button>
      <button onclick = "handleFixCourse(${idName}, '${nameName}', '${desName}')"> Sửa </button>
    </li> `;

  });
  // .then (callback);
}

function resetBtn (){
  getCourses (renderCourses);
}

function renderCourses (courses){
  var listCourses = document.querySelector ('ul');
  var htmls = courses.map (function(course){
    return `
    <li class="course-item-${course.id}">
      <h4> ${course.name}</h4>
      <p> ${course.description}</p>
      <button onclick = "handleDeleteCourse(${course.id})"> Xóa </button>
      <button onclick = "handleFixCourse(${course.id}, '${course.name}', '${course.description}')"> Sửa </button>
    </li> `;
  })
  listCourses.innerHTML = htmls.join ('');
}
function handleCreateForm (){
  var creatBtn = document.getElementById ('create')
  creatBtn.onclick = function (){
    var name = document.querySelector ('input[name = "name"]').value;
    var description = document.querySelector ('input[name = "description"]').value;

    var formData = {
      name: name,
      description: description
    }
    createCourse(formData, function (){
      getCourses (renderCourses);
    });
  }
}






//ECMAScript 6 - ES6
/**Var / let,Const: Scope, Hosting
 * Const / Var, Let: Assignment
 * 
 * Codeblock: if else, loop, {},...
 * Code thuần: var
 * Bable: Const, Let
 * - Khi định nghĩa biến và không gán lại biến đó: Const
 * - Khi cần gán lại giá trị cho biến: Let
 */
// if (true) {
//   const course = 'Javascript basic!';
//   console.log (course);  
// }

/**Template Literals, Multi-line String
 * 
 */
// const courseName = 'Javascript'
// const description = `Course name: ${courseName}`;
// const description2 = `Template string noi suy voi: \${}`;
// console.log (description2);
// console.log (description);
// const lines = `Line 1
// Line 2
// Line 3`
// console.log (lines)

//Arrow function
// const logger=  log => {
//   console.log (log)
// }
// logger ('message...');
// const sum = (a,b) => a + b
// console.log (sum(2,2));
// const sum =  (a,b) => ({a:a, b:b})
// console.log (sum(2,2));
// const obj = {
//   name: 'Javascript',
//   price: 100000000000,
//   getName: function (){
//     return this.price;
//   }
// }
// console.log (obj.getName());

//Classes
// function Course (name, price)
// {
//   this.name =name,
//   this.price = price
// }
// class Course {
//   constructor (name, price)
//   {
//     this.name = name,
//     this.price = price
//   }
//   getName () {
//     return this.name;
//   }
//   getPrice (){
//     return this.price;
//   }
// }
// const phpCourse = new Course ('PHP', 1099999)
// const javaCourse = new Course ('Java', 399999)

// console.log (phpCourse);
// console.log (javaCourse);

//Default parameter values
// function logger (log = 'Gia tri sai'){
//    console.log (log)
// }
// logger ()
// function logger (log, type='log' )
// {
//  console[type](log)
// }
// logger ('jwshgbfb');

//Enhanced object literals
/**Định nghĩa key: value cho object
 * Định nghĩa method cho object
 * Định nghĩa key cho object dưới dạng biến
 */
// var name = 'Javscript';
// var price = 1000;

// var course = {
//   name,
//   price,
//   getName(){
//     return name;
//   }
// }

// console.log (course);
// var fieldName = 'name'
// var fieldPrice = 'price'
// const course= {
//  [fieldName] : 'Java',
// [fieldPrice]: 10000
// }
// console.log (course);

// Destructuring
// var array = ['Javascript', 'PHP', 'Ruby']
// var a = array[0];
// var b = array[1];
// var c = array[2];
// var [a,b,c] = array;
// console.log (a,b,c);
// var [a,b, ...rest]= array;
// console.log (a,b);
// console.log (rest);
// var course ={
//   name:'Javascript',
//   price :10000,
//   children: {
//     name: 'PHP'
//   }
// }
// var {name, price} = course
// console.log (name, price);
// var {name, ...rest} =course
// console.log(name)
// console.log (rest);
// var {name: parentsName, children: {name}} = course
// console.log (parentsName, name);
// var {name, description = 'kkk'} = course;
// console.log (name, description);

//Rest Parameters: Cú pháp giống Spread nhưng tác dụng ngược lại, sử dụng
//kết hợp với destructuring, sử dụng khi định nghĩa ra tham số

//Spread: (...) có thể chuyển đổi một mảng thành một chuỗi các tham số 
//phân tách bằng dấu phẩy
// function logger (a,b,...params){
//   console.log (params)
// }
// logger (1,2,3,4,5,6)
// function logger ({name, price, ...rest}){
//   console.log (name, price)
//   console.log (rest);
// }
// logger ({
//   name: 'Java',
//   price: 10000,
//   description:'kkk'
// })
// var array1 = ['Javascript', 'PHP', 'Ruby'];
// var array2 = ['ReactJS', 'Dart']
// var array3 = [...array2, ...array1]
// // console.log (array1.concat(array2.concat((array3))));
// console.log (array3);
// var obj1= {
//   name: 'Java'
// }
// var obj2 = {
//   price: 1000
// }
// var obj3 = {
//   description: 'kkk'
// }
// var obj4 ={
//   ...obj1,
//   ...obj2,
//   ...obj3
// }
// console.log (obj4);
// var array = ['Javascript', 'PHP', 'Ruby', 'ReactJS']
// // function logger (a,b,c){
// //   console.log (a,b,c);
// // }
// function logger (...rest)
// {
//   for (var i = 0; i < rest.length; i++){
//     console.log (rest[i]);
//   }
// }
// logger (...array);

//Tagged template literals
// function highlight(...rest) {
//   console.log(rest);
// }
// function highlight([first, ...strings], ...values) {
//   // console.log(first);
//   // console.log(strings);
//   // console.log(values);
//   return values.reduce((acc,curr) => [...acc, `<span>${curr}</span>`, strings.shift],
//   [first])
//   .join('')
// }

// var brand = 'f8';
// var course = 'Javascript';
// const htmls = highlight`Học lập trình ${course} ở ${brand}`;
// console.log (htmls)

Modules
import logger from './logger.js';
console.log(logger);
logger ('Text warning...', 'warn');

//Optional chaining
// const obj = {
//   name: 'Khoi',
//   age: {
//     name: 'Dinh',
//     midName: {
//       name: 'Nguyen'
//     }
//   }
// }
// if (obj?.age?.midName?.name){
// console.log (obj.age.midName.name);}
// const obj = {
// test (value){
//   console.log (value);
// }}
// obj.test?.(1234);























































































