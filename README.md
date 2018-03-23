# kanan-ahalpara-form-1526
Js Form Validation Assignment


Your site is published at https://kananahalpara.github.io/kanan-ahalpara-form-1526/


ASSIGNMENT : 

Task description
You will use JavaScript to validate an HTML form. The form will consist of 4 <input> tags: full-name, email, message and submit.

The max-width of the main content is 50 rem. If the window is greater than 50 rem, the main content stays positioned in the middle of view-port.

 

File Structure
file-structure.png

 

Font-stack
Arial, Helvetica, Helvetica Neue, sans-serif

Font-size for entire web-page excluding <legend> tag is 1rem. Font-size for <legend> is 2rem.

 

Colors
#DDD

#F5F5F5

#6495ED

 

CSS
The form will be responsive and you will need to replicate the style presented below:

Smart-phone - up to 25rem



Tablet - between 25rem and 40rem



Desktop - between 40rem and 50rem | max-width: 50rem



 

Behaviour
If the form is submitted and all text-fields are empty:



If the form is submitted and only full name is filled in:



 

If the form is properly filled out and submited:



 

JavaScript Guide-lines
// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <form>,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

// Declare object that will store the form-data
// Declare object that will store the errors

// Declare variable that will 
// store regular expression for email

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
        
    // Prevent the default behaviour 
    // of the form element.


    +-----------+    
    | FULL NAME |
    +-----------+
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your object "errors".
    // End your conditional here.


    +-------+    
    | EMAIL | 
    +-------+
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your Object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your object "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your object"errors"
    // End your outer conditional here.


    +---------+    
    | MESSAGE | 
    +---------+
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your object"errors"
    // End your conditional here.


    +-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+
    // Check if there is anything in object errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.

// Close your function here
    
// Register your form to "submit" event.
