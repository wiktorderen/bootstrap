<script src="form_check.js"></script> 
<link rel="stylesheet" href="from.css"></link>
<link rel="strona" href="form.hrml"></link>

function isEmpty(str) 
{
     return (!str || str.length === 0); 
}

     function checkEmail(str) 
     { if (isWhiteSpace(str)) 
          alert("Podaj właściwy e-mail"); 
       else 
       { 
            at = str.indexOf("@"); 
            if (at < 1) 
            { 
                 alert("Nieprawidłowy e-mail"); 
            return false; 
            } else 
            { 
                 var l = -1; 
                 for (var i = 0; i < str.length; i++) 
                 { 
                      var c = str.charAt(i); 
                      if (c == ".") l = i; 
                 } 
                 if ((l < (at + 2)) || (l == str.length - 1)) 
                 alert("Nieprawidłowy e-mail"); 
                 } 
                 return true; 
            } 
          }

     function checkStringAndFocus(obj, msg) 
     { 
          var str = obj.value; 
          var errorFieldName = "e_" + obj.name.substr(2, obj.name.length); 
          if (isWhiteSpace(str) || isEmpty(str)) 
          { 
               document.getElementById(errorFieldName).innerHTML = msg; obj.focus(); return false; 
          } 
          else return true; 
     }