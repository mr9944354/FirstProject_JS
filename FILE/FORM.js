form1.addEventListener("submit",(e)=>{
    e.preventDefault();
    validation();
})
 
function validation() {    
       var FULL_NAME = document.getElementById("FullName").value;
      var USERNAME = document.getElementById("username").value;
      var PHONE_NO = document.getElementById("PhoneNo").value;
      var EMAIL = document.getElementById("email").value;
      var PASSWORD = document.getElementById("password").value;
      var CON_PASSWORD = document.getElementById("confirm_password").value;
      var GENDER = document.getElementById('gender').value;
      var QUALIFICATION = document.getElementById('qualification').value;
      var COURSE = document.getElementById('course').value;
      var ADDRESS = document.getElementById("address").value;  
        var errorCount = 0;

        //name
        if (isNaN(FULL_NAME) && FULL_NAME.length > 0) {
        document.getElementById("FullName").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        
        } else {
            errorCount++;  
            document.getElementById('FullName').style = `border-color:rgb(231 19 79);
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(253 13 13);
                0.25rem rgb(154 243 10);`
            
            //username
        }
        if (USERNAME.includes("@") && USERNAME.length > 0) {
            document.getElementById("username").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        } else {
            errorCount++;
            document.getElementById('username').style = `border-color:rgb(231 19 79);
        outline:0;
        box-shadow: 0 0 0 0.25rem rgb(253 13 13);
                0.25rem rgb(154 243 10);`
        }
        //phone no
        if (!isNaN(PHONE_NO) && PHONE_NO.length > 0) {
            document.getElementById("PhoneNo").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        } else {
            errorCount++;
            document.getElementById('PhoneNo').style = `border-color:rgb(231 19 79);
        outline:0;
        box-shadow: 0 0 0 0.25rem rgb(253 13 13);
            0.25rem rgb(154 243 10);`
            
        }
        //email
        if (EMAIL.includes("@") && EMAIL.length > 0 && EMAIL.includes(".")) {
            document.getElementById("email").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        } else {
            errorCount++;
            document.getElementById('email').style = `border-color:rgb(231 19 79);
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(253 13 13);
                0.25rem rgb(154 243 10);`

        }
        //password
        if (PASSWORD.includes("@") && PASSWORD.length > 0) {
            document.getElementById("password").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        } else {
            errorCount++;
            document.getElementById('password').style = `border-color:rgb(231 19 79);
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(253 13 13);
                0.25rem rgb(154 243 10);`

        }
        //confirm password
        if (CON_PASSWORD.includes("@") && CON_PASSWORD.length > 0 && CON_PASSWORD == PASSWORD) {
            document.getElementById("confirm_password").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        } else {
            errorCount++;
            document.getElementById('confirm_password').style = `border-color:rgb(231 19 79);
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(253 13 13);
                0.25rem rgb(154 243 10);`

        }

        //gender
        if (GENDER == 'MALE' || GENDER == 'FEMALE') {
            document.getElementById("gender").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        } else {
            errorCount++;
            document.getElementById('gender').style = `border-color:rgb(231 19 79);
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(253 13 13);
                0.25rem rgb(154 243 10);`

        }
        //qualification
        if (QUALIFICATION == 'IT' || QUALIFICATION == 'CSE' || QUALIFICATION == 'EEE' || QUALIFICATION == 'ECE' || QUALIFICATION == 'MECH') {
            document.getElementById("qualification").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        } else {
            errorCount++;
            document.getElementById('qualification').style = `border-color:rgb(231 19 79);
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(253 13 13);
                0.25rem rgb(154 243 10);`

        }
        if (COURSE == 'FRONTEND' || COURSE == 'BACKEND' || COURSE == 'TESTING' || COURSE == 'DEVOPS') {
            document.getElementById("course").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        } else {
            errorCount++;
            document.getElementById('course').style = `border-color:rgb(231 19 79);
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(253 13 13);
                0.25rem rgb(154 243 10);`

        }
        
    
        //address
        if (ADDRESS.length > 0) {
            document.getElementById("address").style = `color:#212529;
            background-color:#fff;
            border-color:#adff91;
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(154 243 10);`
        } else {
            errorCount++;
            document.getElementById('address').style = `border-color:rgb(231 19 79);
            outline:0;
            box-shadow: 0 0 0 0.25rem rgb(253 13 13);
                0.25rem rgb(154 243 10);`

        }
    
        document.getElementById("myBtn").disabled = true;
        outputPage();
    }

        async function outputPage() {
            var totalObjectOP = {
                 FULL_NAME : document.getElementById("FullName").value,
                 USERNAME : document.getElementById("username").value,
                 PHONE_NO : document.getElementById("PhoneNo").value,
                EMAIL : document.getElementById("email").value,
                 PASSWORD : document.getElementById("password").value,
                 CON_PASSWORD : document.getElementById("confirm_password").value,
                 GENDER : document.getElementById('gender').value,
                 QUALIFICATION : document.getElementById('qualification').value,
                 COURSE : document.getElementById('course').value,
                 ADDRESS : document.getElementById("address").value,
                collectionId: 'MOHAN_PROJECT_WORK',
            }
        

             await fetch('https://rczversion2.herokuapp.com/api/addregistration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(totalObjectOP),
            });
            nextPage()
            function nextPage() {
                document.location.href = "FILE/output.html";
            }
        }
    