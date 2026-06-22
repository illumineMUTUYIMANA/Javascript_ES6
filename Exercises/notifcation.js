const notifications= [
  { message:"You have a new message", delay:1000 },
  { message:"Your download is ready", delay:3000 },
  { message:"Battery is low", delay:2000 },
  { message:"Friend is online", delay:4000 }
];

function notify(arr){
  for (let obj of arr){
    setTimeout(function(){
      console.log(obj.message);
    },obj.delay);
  }

  return "Notification";

}
console.log(notify(notifications));