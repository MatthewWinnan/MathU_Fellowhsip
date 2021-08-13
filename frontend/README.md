# MathU_Fellowhsip
Please use the corresponding directories to work in. 
Use the readme to add any important information regarding how to run, compile or edit your code.
Also feel free to add links to helpful tutorials here.

Front end development happens here

## Student Side 
Branches:
1. feature-student-mainPage


### Student Main Page (View Bursary)
There are a few cards on the main page and each card as similar inforation on it about the bursary. 
The .html is linked to the corrosponding .ts file which is important because the .html has varaibles that are used in the .ts file. This is so that the work is done by the .ts file to get the information from the database instead of the .html.

#### The Burger Menu 
The burger menu has the following:
1. Home Page (linked to the /student-main page)
2. View Profile (not linked yet)
3. Shortlist (linked to the /shortlist page)
4. Notifications (v1.2)
5. Settings (v1.2)
6. Logout (log out user)

#### Student functions
1. rightOption() to decide which to use:
    1. nextBursary() will cycle through the available bursaries that meet the filter criteria forwards
    2. applyBursary() will cycle through the available bursaries that meet the filter criteria backwards
2. leftOption() to decide which to use:
    1. prevBursary()
    2. dismissBursary()
3. viewMore() to show more information about the bursary
4. filter()

Have not made the function able to connect to the backend yet. 

### Last updated (13 August 2021)