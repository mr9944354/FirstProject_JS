// var errorMessages = {
//     FullName: `please enter a valid name`,
//     username: `please enter a valid username`,
//     PhoneNo: `please enter a valid mobile number`,
//     email: `please enter a valid mail`,
//     password: `please enter valid password`,
//     confirm_password: `please enter same password`,
//     address:`please enter valid address`
//    }

// function document.getElementById(Id) {
//     return document.getElementById(Id).value;
// }
//  function getElement(id) {
//      return document.getElementById(id);
// }
// function validation(type, elementId,SpanSpecificId) {
//     if (type == "right") {
//         getElement(elementId).style = `color:#212529;
//                                     background-color:#fff;
//                                     border-color:#adff91;
//                                     outline:0;
//                                     box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
//     } else if (type == "error") {
//         getElement((SpanSpecificId ? SpanSpecificId : elementId)+ "Span").innerHTML = SpanSpecificId ? errorMessages[SpanSpecificId] : errorMessages[elementId];
//         getElement((SpanSpecificId ? SpanSpecificId : elementId) + "Span").style.color = '#cb1740';


        
//     }
// }
 
// function new_entry() {
    
   
    
//     var NAME = document.getElementById("FullName");
//     var USERNAME = document.getElementById("username");
//     var PHONE_NO = document.getElementById("PhoneNo");
//     var EMAIL = document.getElementById("email");
//     var PASSWORD = document.getElementById("password");
//     var CON_PASSWORD = document.getElementById("confirm_password");
//     var ADDRESS = document.getElementById("address");
    
//     var errorCount = 0;

//     //name
//     if (isNaN(NAME) && NAME.length > 0) {
//         validation("right", "FullName");
//     } else {
//          errorCount++;
//          validation("error", "FullName");
//             //username
//     }
//     if (USERNAME.includes("@")&&USERNAME.length>0) {
//         validation("right", "username");
//     } else {
//         errorCount++;
//         validation("error","username")
//     }
//     //phone no
//     if (!isNaN(PHONE_NO)&&PHONE_NO.length>0) {
//         validation("right", "PhoneNo");
//     } else {
//         errorCount++;
//         validation("error","PhoneNo")
//     }
//     //email
//     if (EMAIL.includes("@")&&EMAIL.length>0&&EMAIL.includes(".")) {
//         validation("right", "email");
//     } else {
//         errorCount++;
//         validation("error", "email")
//     }
//     //password
//     if (PASSWORD.includes("@")&&PASSWORD.length>0) {
//         validation("right", "password");
//     } else {
//         errorCount++;
//         validation("error","password")
//     }
//     //confirm password
//     if (CON_PASSWORD.includes("@")&&CON_PASSWORD.length>0&&CON_PASSWORD==PASSWORD) {
//         validation("right", "confirm_password");
//     } else {
//         errorCount++;
//         validation("error","confirm_password")
//     }
//         //address
//         if (ADDRESS.length>0) {
//             validation("right", "address");
//         } else {
//             errorCount++;
//             validation("error","address")
//         }
//     }
   
