form1.addEventListener("submit",(e)=>{
    e.preventDefault();
    validation();
})
 
function validation() {    
       var APPLICANT_NAME = document.getElementById("FullName").value;
      var USER_NAME = document.getElementById("username").value;
      var PHONE_NUMBER = document.getElementById("PhoneNo").value;
      var EMAIL_ID = document.getElementById("email").value;
      var PASS_WORD = document.getElementById("password").value;
      var CONFIRM_PASSWORD = document.getElementById("confirm_password").value;
      var GENDER = document.getElementById('gender').value;
      var QUALIFICATION = document.getElementById('qualification').value;
      var COURSE = document.getElementById('course').value;
      var ADDRESS = document.getElementById("address").value;  
        var errorCount = 0;

        //name
        if (isNaN(APPLICANT_NAME) && APPLICANT_NAME.length > 0) {
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
        if (USER_NAME.includes("@") && USER_NAME.length > 0) {
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
        if (!isNaN(PHONE_NUMBER) && PHONE_NUMBER.length > 0) {
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
        if (EMAIL_ID.includes("@") && EMAIL_ID.length > 0 && EMAIL_ID.includes(".")) {
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
        if (PASS_WORD.includes("@") && PASS_WORD.length > 0) {
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
        if (CONFIRM_PASSWORD.includes("@") && CONFIRM_PASSWORD.length > 0 && CONFIRM_PASSWORD == PASS_WORD) {
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
                 APPLICANT_NAME : document.getElementById("FullName").value,
                 USER_NAME : document.getElementById("username").value,
                 PHONE_NUMBER : document.getElementById("PhoneNo").value,
                EMAIL_ID : document.getElementById("email").value,
                 PASS_WORD : document.getElementById("password").value,
                 CONFIRM_PASSWORD : document.getElementById("confirm_password").value,
                 GENDER : document.getElementById('gender').value,
                 QUALIFICATION : document.getElementById('qualification').value,
                 COURSE : document.getElementById('course').value,
                 ADDRESS : document.getElementById("address").value,
                collectionId: 'MOHAN_PROJECT_WORKS',
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
    