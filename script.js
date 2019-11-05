$("#latinizeButton").click(function(){
  console.log("something");
  let string = $("#initial").val();
  string = string.toLowerCase();
  let words = string.split(" ");
  words.forEach(function(word){
    let firstLetter = word.charAt(0);
    let vowels = ["a", "e", "i", "o", "u"];
    if(vowels.include(firstLetter)) {
        
    } else {
        
    }
  });
});