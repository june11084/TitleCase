var titleCase = function(string) {
  var str = string.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    var conjunctions =['from','to','the','on','and']
    if(conjunctions.includes(str[i])===false){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    } else if(conjunctions.includes(str[i])===true && conjunctions.includes(str[0])===true){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    } else {
      str[i] = str[i].slice(0);
    }
  }
  return str.join(' ');
}
// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }
// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var string = $("input#stringInput").val();
    //var stringArray = titleCase(string);

    var stringArray = titleCase(string);
    $("#result").text(stringArray);

  });
});
