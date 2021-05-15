
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>
   _____             __________     ____            
  / ___/____  __  __/ __/ __/ /__  / __ )____  _  __
  \__ \/ __ \/ / / / /_/ /_/ / _ \/ __  / __ \| |/_/
 ___/ / / / / /_/ / __/ __/ /  __/ /_/ / /_/ />  <  
/____/_/ /_/\__,_/_/ /_/ /_/\___/_____/\____/_/|_|
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
