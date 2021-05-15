
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>
   ____          ________    ___          
  / __/__  __ __/ _/ _/ /__ / _ )___ __ __
 _\ \/ _ \/ // / _/ _/ / -_) _  / _ \\ \ /
/___/_//_/\_,_/_//_//_/\__/____/\___/_\_\  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
