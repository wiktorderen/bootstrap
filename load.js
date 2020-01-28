function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("pobierz").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "http://orfi.uwm.edu.pl/~s145878/strona_bootstrap_ajax/speedcuberzy.txt", true);
    xhttp.send();
  }