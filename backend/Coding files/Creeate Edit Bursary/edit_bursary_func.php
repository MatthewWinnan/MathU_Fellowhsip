<?php

include 'session.php';
//include 'editing_functions.php';


function editBursary(){
    include 'connection.php';// Why??? because of $conn
    //Database Connection Start...
    date_default_timezone_set ("Africa/Johannesburg");

    //===========================================================
    $email = 'dflorrian@jbsr.com';// ????For Now Hard Coded??? We have to get user email from $SESSION variable
    $sql= "SELECT * FROM `sponsor_users` WHERE email_address = 'dflorrian@jbsr.com'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    $result = $row["company_id"];
    //===========================================================
    //Checkboxes variables.
    /*
    $rsaCitizen = isset($_POST['rsaCitizen']) ? "1" : "0";
    $financialAssistance= isset($_POST['financialAssistance']) ? "1" : "0";
    $studyFurther = isset($_POST['studyFurther']) ? "1" : "0";
    $disability = isset($_POST['disability']) ? "1" : "0";
    */
//===========================================================================================================
//                          BEGGINING OF EDITING BURSARY FUNCTIONS
//============================================================================================================

//=================EDIT BURSARY NAME==========================================================================
    function editName($result){
        include 'connection.php';// Why??? because of $conn
        $bursaryName = $_POST['bursary_name']; 
        $CheckbursaryName = isset($_POST['bursary_name']) ? "$bursaryName" : "";
        
        if(!empty($CheckbursaryName)){
            $sql1 = "UPDATE bursaries SET Bursary_Name= '$bursaryName' WHERE Company_ID = $result";
            $run_query = mysqli_query($conn,$sql1);
        }
    }
    editName($result);
//==============================END===========================================================================

//=================EDIT WORK BACK DURATION====================================================================
function workBackDuration($result){
    include 'connection.php';// Why??? because of $conn
    $workback = $_POST['WorkBackDuration']; 
    $Checkworkback = isset($_POST['WorkBackDuration']) ? "$workback" : "";
    
    if(!empty($Checkworkback)){
        $sql1 = "UPDATE bursaries SET WB_Duration='$workback' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}
workBackDuration($result);
//==============================END===========================================================================

//=================BURSARY APPLICATION END DATE===============================================================
function bursaryClosingDate($result){
    include 'connection.php';// Why??? because of $conn
    $bursaryEnddate = $_POST['bursaryEnddate']; 
    $CheckbursaryEnddate = isset($_POST['bursaryEnddate']) ? "$bursaryEnddate" : "";
    
    if(!empty($CheckbursaryEnddate)){
        $sql1 = "UPDATE bursaries SET Closing_Date='$bursaryEnddate' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }

}
bursaryClosingDate($result);
//==============================END===========================================================================

//=================MINIMUM AGE================================================================================
function minimumAge($result){
    include 'connection.php';// Why??? because of $conn
    $minAge = $_POST['minAge']; 
    $CheckminAge = isset($_POST['minAge']) ? "$minAge" : "";
    
    if(!empty($CheckminAge)){
        $sql1 = "UPDATE bursaries SET Minimum_Age='$minAge' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}
minimumAge($result);
//==============================END===========================================================================

//=================MAXIMUM AGE================================================================================
function maximumAge($result){
    include 'connection.php';// Why??? because of $conn
    $maxAge = $_POST['maxAge']; 
    $CheckmaxAge = isset($_POST['maxAge']) ? "$maxAge" : "";
    
    if(!empty($CheckmaxAge)){
        $sql1 = "UPDATE bursaries SET Maximum_Age='$maxAge' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}
maximumAge($result);
//==============================END===========================================================================

//=================BURSARY DURATION===========================================================================
function bursaryDuration($result){
    include 'connection.php';// Why??? because of $conn
    $bursaryDuration = $_POST['bursaryDuration']; 
    $CheckbursaryDuration = isset($_POST['bursaryDuration']) ? "$bursaryDuration" : "";
    
    if(!empty($CheckbursaryDuration)){
        $sql1 = "UPDATE bursaries SET Bursary_Duration='$bursaryDuration' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}
bursaryDuration($result);
//==============================END===========================================================================

//=================REQUIRED MARKS=============================================================================
function requiredMarks($result){
    include 'connection.php';// Why??? because of $conn
    $requiredMarks = $_POST['requiredMarks']; 
    $CheckrequiredMarks = isset($_POST['requiredMarks']) ? "$requiredMarks" : "";
    
    if(!empty($CheckrequiredMarks)){
        $sql1 = "UPDATE bursaries SET Minimum_Average='$requiredMarks' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}

requiredMarks($result);
//==============================END==========================================================================

//===============EMAIL FOR FURTHER COMMUNICATIONS============================================================
function furtherCommunicationEmail($result){
    include 'connection.php';// Why??? because of $conn
    $bursaryEmail = $_POST['bursaryEmail']; 
    $CheckrbursaryEmail = isset($_POST['bursaryEmail']) ? "$bursaryEmail" : "";
    
    if(!empty($CheckrbursaryEmail)){
        $sql1 = "UPDATE bursaries SET Email_Address='$bursaryEmail' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}

furtherCommunicationEmail($result);
//==============================END=========================================================================

//=================DATE FOR FURTHER COMMUNICATIONS==========================================================
function furtherCommunicationDate($result){
    include 'connection.php';// Why??? because of $conn
    $bursaryCommunicationDate = $_POST['bursaryCommunicationDate']; 
    $CheckbursaryCommunicationDate = isset($_POST['bursaryCommunicationDate']) ? "$bursaryCommunicationDate" : "";
    
    if(!empty($CheckbursaryCommunicationDate)){
        $sql1 = "UPDATE bursaries SET Shortlist_Date='$bursaryCommunicationDate' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}

furtherCommunicationDate($result);
//==============================END===========================================================================

//=====================================BURSARY TYPE===========================================================
function bursaryType($result){
    include 'connection.php';// Why??? because of $conn
    $bursaryType = $_POST['bursaryType']; 
    $CheckbursaryType = isset($_POST['bursaryType']) ? "$bursaryType" : "";
    
    if(!empty($CheckbursaryType)){
        $sql1 = "UPDATE bursaries SET Bursary_Type='$bursaryType' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}

bursaryType($result);
//==============================END===========================================================================


//=====================================ACADEMIC LEVEL=========================================================
function academicLevel($result){
    include 'connection.php';// Why??? because of $conn
    $academicLevel = $_POST['academicLevel']; 
    $CheckacademicLevel = isset($_POST['academicLevel']) ? "$academicLevel" : "";
    
    if(!empty($CheckacademicLevel)){
        $sql1 = "UPDATE bursaries SET Academic_Level='$academicLevel' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}

academicLevel($result);
//==============================END===========================================================================

//=====================================FIELD OF STUDY=========================================================
function fieldOfstudy($result){
    include 'connection.php';// Why??? because of $conn
    $fieldOfstudy = $_POST['fieldOfstudy']; 
    $CheckfieldOfstudy = isset($_POST['fieldOfstudy']) ? "$fieldOfstudy" : "";
    
    if(!empty($CheckfieldOfstudy)){
        $sql1 = "UPDATE bursaries SET Study_Field='$fieldOfstudy' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }

}

fieldOfstudy($result);

//==============================END===========================================================================

//=====================================YEAR OF STUDY=========================================================
function yearOfstudy($result){
    include 'connection.php';// Why??? because of $conn
    $yearOfstudy = $_POST['yearOfstudy']; 
    $CheckyearOfstudy = isset($_POST['yearOfstudy']) ? "$yearOfstudy" : "";
    
    if(!empty($CheckyearOfstudy)){
        $sql1 = "UPDATE bursaries SET Current_Year='$yearOfstudy' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}

yearOfstudy($result);
//==============================END===========================================================================

//=====================================RSA CITIZEN=========================================================
function rsaCitizen($result){
    include 'connection.php';// Why??? because of $conn
    $rsaCitizen = $_POST['rsaCitizen']; 
    $CheckrsaCitizen = isset($_POST['rsaCitizen']) ? "1" : ""; //If checked should insert 1==True in database
    
    if(!empty($CheckrsaCitizen)){
        $sql1 = "UPDATE bursaries SET RSA_Citizen='$CheckrsaCitizen' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }

}

rsaCitizen($result);

//==============================END===========================================================================

//=============================NEED FOR FINANCIAL ASSISTANCE==================================================
function finacialAssisatance($result){
    include 'connection.php';// Why??? because of $conn
    $financialAssistance = $_POST['financialAssistance']; 
    $CheckfinancialAssistance = isset($_POST['financialAssistance']) ? "1" : ""; //If checked should insert 1==True in database
    
    if(!empty($CheckfinancialAssistance)){
        $sql1 = "UPDATE bursaries SET Financial_Need='$CheckfinancialAssistance' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}

finacialAssisatance($result);
//==============================END===========================================================================

//=============================WILLING TO STUDY FURTHER ==================================================
function studyFurther($result){
    include 'connection.php';// Why??? because of $conn
    $studyFurther = $_POST['studyFurther']; 
    $CheckstudyFurther = isset($_POST['studyFurther']) ? "1" : ""; //If checked should insert 1==True in database
    
    if(!empty($CheckstudyFurther)){
        $sql1 = "UPDATE bursaries SET Study_Further='$CheckstudyFurther' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);

    }

}

studyFurther($result);
//==============================END===========================================================================

//==========================================DISABILITY ======================================================

function disability($result){
    include 'connection.php';// Why??? because of $conn
    $disability = $_POST['disability']; 
    $Checkdisability = isset($_POST['disability']) ? "1" : ""; //If checked should insert 1==True in database
    
    if(!empty($Checkdisability)){
        $sql1 = "UPDATE bursaries SET Disability='$Checkdisability' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}

disability($result);

//==============================END===========================================================================

//==========================================PROVINCE======================================================

function province($result){
    include 'connection.php';// Why??? because of $conn
    $province = $_POST['province']; 
    $Checkprovince = isset($_POST['province']) ? "$province" : ""; //If checked should insert 1==True in database
    
    if(!empty($Checkprovince)){
        $sql1 = "UPDATE bursaries SET Province='$province' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    }
}

province($result);

//==============================END===========================================================================

//=======================================WHAT A BURSARY COVERS FOR======================================================

function bursaryCovers($result){
    include 'connection.php';// Why??? because of $conn

    $checkbox1 = $_POST['covers'];
    $chk="";
    foreach($checkbox1 as $chk1){
        $chk.= $chk1.",";
    }
    
    if(!empty($chk)){
        $sql1 = "UPDATE bursaries SET Province='$chk' WHERE Company_ID = $result";
        $run_query = mysqli_query($conn,$sql1);
    } 
}

bursaryCovers($result);

//==============================END===========================================================================

}

editBursary()

?>