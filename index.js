const{TArray, TString, TObject, TNumber} = require("./validators");

const post = {
  title: "my title",
  likes: 3,
}

const payload = {
  firstName: "Jeffrey Marvin",
  lastName: "Foroness",
  age: 30,
  post,
}


const data = TObject(payload).shapeOf({
  firstName: TString,
  lastName: TString,
  age: TNumber,
  post: TObject.shapeOf({ title: TString, likes: TNumber}),
});

console.log(data);