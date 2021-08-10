<!--Html form-->

<!DOCTYPE html>
<html lang="en">
<head>

    <title>Edit Bursary</title>
    <center>
        <h4>EDIT BURSARY</h4>
    </center>
    
    <!--<link rel="stylesheet" href="https://bootswatch.com/5/cosmo/bootstrap.min.css">-->
    <link rel="stylesheet" href="https://bootswatch.com/5/cyborg/bootstrap.min.css">
    <!--<link rel="stylesheet" href="https://bootswatch.com/5/cosmo/bootstrap.min.css">-->
</head>
<body>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="">CANCEL</a> <!-- Link will take Sponsor back to View Bursaries-->
                
            </div>
        </div>
    </nav>
    <div class="container">
        <form method="post" action="edit_bursary_func.php"> <!-- Send inputs to create_bursary.php-->
            <div>
                <label>Bursary Name:</label><br>
                <!--Value can be set to "save" if we want supplied info to stay in the blocks or we can use php-->
                <input type="text" name="bursary_name" value="" placeholder="Enter Bursary Name Here.." >
            </div><br>
            <!---------Brsary Dropdown Start--------->
            <div>
            <label>Bursary Type:</label><br>
                <select name="bursaryType">
                    <option value="">--Select--</option>
                    <option value="Bursary">Bursary</option>
                    <option value="Work Back Bursary">Work Back Bursary</option>
                    <option value="Full Bursary">Full Bursary</option>
                    <option value="Partial Bursary">Partial Bursary</option>
                    
                </select><br><br>
            </div>
            <!-------------Bursary Dropdown End------------------>

            
            <div>
                <label>Work Back Duration (Only Fill If Bursary Is Workback Type):</label><br>
                <input type="integer" name="WorkBackDuration"  value="" placeholder="Enter Work Back Duration..">
            </div><br>
            
            <!-- Bursary Date Start-->
            <div>
                <label>Bursary Application End Date: (Please Enter Date As Year/Month/Day)</label><br>
                <input type="text" name="bursaryEnddate" value="" placeholder="Enter Date Here..">
            </div><br>
            <!--Bursary Date End-->

            <!-- Age group start-->
            <div>
                <label for="Minimum Age" >Minimum Age:</label>
                    <input type="integer" name="minAge" size="12" maxlength="20" placeholder="Enter Minimum Age..">
                <label for="Maximum Age" >Maximum Age:</label>
                    <input type="integer" name="maxAge" size="12" maxlength="20" placeholder="Enter Maximum Age Here..">
            </div><br>
            <!-- Age group end-->

            <!--Academic Level Dropdown Start-->
            <div>
            <label>Academic Level:</label><br>
                <select name="academicLevel">
                    <option value="">--Select--</option>
                    <option value="High School">High School</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Postgraduate">Postgraduate</option>
                    <option value="College">College</option>
                    <option value="Any">Or Any</option>
                    
                </select><br><br>
            </div>
            <!--Academic Level Dropdown End-->

            <!-- Field Of Study Start-->
            <div>
            <label>Field Of Study:</label><br>
                <select name="fieldOfstudy">
                    <option value="">--Select--</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Education">Education</option>
                    <option value="Law">Law</option>
                    <option value="Theology">Theology</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Health Sciences">Health Sciences</option>
                    <option value="Economics and Management Sciences">Economics & Management Sciences</option>
                    <option value="Natural and Agricaltural Sciences">Natural & Agricultural Sciences</option>
                    
                </select><br><br>
            </div>
            <!-- Field Of Study End-->

            <!--Year Of Study Dropdown Start-->
            <div>
            <label>Year Of Study:</label><br>
                <select name="yearOfstudy">
                    <option value="">--Select--</option>
                    <option value="0">Matric Student</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="4">Year 4</option>
                    <option value="5">Any</option>
                </select><br><br>
            </div>
            <!--Year Of Study Dropdown Finish-->

            <!-- Bursary Duration Start-->
            <div>
                <label>Bursary Duration:</label><br>
                <input type="interger" name="bursaryDuration" value="" placeholder="Enter Duration Here..">
            </div><br>
            <!-- Bursary Duration End-->

            <!-- Reguired Marks Start-->
            <div>
                <label>Required Marks:</label><br>
                <input type="interger" name="requiredMarks" value="" placeholder="Enter Required Marks Here..">
            </div><br>
            <!-- Required Marks End-->

            <!--RSA Citizen Satrt-->
            <div>
                <label>RSA Citizen</label><br>
                <input type="checkbox" name="rsaCitizen" value="">
            </div><br>
            <!--RSA Citizen End-->

            <!--Need For Financial Assistance Start-->
            <div>
                <label>Need For Financial Assisatance:</label><br>
                <input type="checkbox" name="financialAssistance" value="">
            </div><br>
            <!--Need For Financial Assisatance End-->

            <!--Willing To Study Further Start-->
            <div>
                <label>Willing To Study Further:</label><br>
                <input type="checkbox" name="studyFurther" value="">
            </div><br>
            <!--Willing To Study Further End-->

            <!--Disability Start-->
            <div>
                <label>Disabilty:</label><br>
                <input type="checkbox" name="disability" value="">
            </div><br>
            <!--Disability End-->

            <!--Province Dropdown Start-->
            <div>
            <label>Province:</label><br>
                <select name="province">
                    <option value="">--Select--</option>
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Free State">Free State</option>
                    <option value="Gauteng">Gauteng</option>
                    <option value="KwaZulu Natal">KwaZulu-Natal</option>
                    <option value="limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                    <option value="Northen Cape">Northern Cape</option>
                    <option value="North West">North West</option>
                    <option value="Western Cape">Western Cape</option>
                </select><br><br>
            </div>
            <!--Province Dropdown End-->

            <!--Bursary covers for Checkboxes Start-->
            <div>
                <label>Bursary Covers For:</label><br>
                <input type="checkbox"  id="fullpayment" name="covers[]" value="Full Payment">
                    <label for="fullpayment">Full Payment Of Registration.</label><br>

                <input type="checkbox"  id="tuition" name="covers[]" value="Tuition">
                    <label for="fullpayment">Tuition.</label><br>

                <input type="checkbox"  id="accomodation" name="covers[]" value="Accomodation">
                    <label for="accomodation">Accomodation.</label><br>

                <input type="checkbox"  id="meals" name="covers[]" value="Meals">
                    <label for="meals">Meals.</label><br>

                <input type="checkbox"  id="books" name="covers[]" value="Book Allowance">
                    <label for="books">Book Allowance.</label><br>

                <input type="checkbox"  id="pc" name="covers[]" value="Laptop">
                    <label for="pc">Laptop.</label><br>

                <input type="checkbox"  id="trans" name="covers[]" value="Transport">
                    <label for="trans">Transport.</label><br>
                
            </div><br>
            <!--Bursary covers for Checkboxes End-->

            <!--Bursary Email For Further Communications Start-->
            <div>
                <label>Email Address For Further Communication:</label><br>
                <input type="text" name="bursaryEmail" value="" placeholder="Enter Email Address..">
            </div><br>
            <!--Bursary Email For Further Communications End-->

            <!-- Bursary Date For Further Communication Start-->
            <div>
                <label>Date For Further Communication: (Please Enter Date As Year/Month/Day)</label><br>
                <input type="text" name="bursaryCommunicationDate" value="" placeholder="Enter Date Here..">
            </div><br>
            <!-- Bursary Date For Further Communication End-->
            
            <button type="submit" name="submit" class="btn btn-primary" value="submit">EDIT BURSARY</button>
            
        </form>
    </div>  
</body>
</html>