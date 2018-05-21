//For Preloader
window.addEventListener('load', function(){


  var qoutes = new Array();
  var peeps = new Array();
  //Add new quotes in this array.
  //Minimum number of quotes required is 10--!important
  quotes = ["Talk is cheap. Show me the code.",
            "Programs must be written for people to read, and only incidentally for machines to execute.",
            "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
            "I'm not a great programmer; I'm just a good programmer with great habits.",
            "You've baked a really lovely cake, but then you've used dog shit for frosting.",
            "The best way to prepare [to be a programmer] is to write programs, and to study great programs that other people have written. In my case, I went to the garbage cans at the Computer Science Center and fished out listings of their operating system.",
            "What one programmer can do in one month, two programmers can do in two months.",
            "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
            "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
            "The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks."];
  peeps = ['Linus Torvalds','Harold Abelson','John Woods','Kent Beck','Steve Jobs','Bill Gates','Fred Brooks','Patrick McKenzie','Andy Hunt','Mark Zukerberg'];
  
  
  var preload = document.getElementById("overlay");
  //Creates a random number for index 
  var index = Math.floor(Math.random()*10);
  document.getElementById("quote-board").innerHTML = "\""+quotes[index]+"\" <br> -"+peeps[index];
  var loading = 0;
  var id = setInterval(frame, 64);

  function frame(){
    if(loading == 70){
      clearInterval(id);
      document.getElementById("overflow").className = " ";
      overlay.style.display = "none";
    }
    else{
      loading = loading + 1;
      if(loading==60){
      preload.style.animation = "fadeout 1s ease";
    }
    }
  }
});