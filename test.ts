function fetch(a) {
  Logger.log(a)
  if(a == undefined){
  //  var a=[[["{1:1}"],2,3],2,3]
    
   // a[0][0] = {1:1,2:2,3:3}
  }
    GasLoader.removeCache("https://raw.githubusercontent.com/gsuitedevs/apps-script-samples/master/apps-script/execute/target.js");
    // GasLoader.require( url , charset , cacheTime);
    // Set null value to charset,if don't need charset.
    // Set 0 value to cacheTime,if don't need cache.
     GasLoader.require("https://raw.githubusercontent.com/gsuitedevs/apps-script-samples/master/apps-script/execute/target.js", null, 0);
  return getFoldersUnderRoot();
   var sheet = SpreadsheetApp.openById("1IvJUL7faubds4VsWxysaBTGOGJ0X-qmOgUeyJa5xZVI").getSheetByName("GLOBAL")
  //let ex = sheet.getRange("D1").getValue()
  if(a !== undefined){
   var obj = (new Function("return " + a[0][0]))();
   // var obj=JSON.parse(a[0][0])
  //eval(ex)
  
  sheet.getRange("A1").setValue(obj["333"])//zz[11111])
   return obj["333"]//[1,2,3,4];
  }
  return 1
 
}
