var marks = parseInt(prompt("Enter the marks:"));
if (marks <= 100 && marks >= 80) {
  alert("grade A");
} else if (marks <= 79 && marks >= 60){
  alert("grade B");
} else if (marks <= 59 && marks >= 40){
  alert ("grade C");
} else if (marks <= 39 && marks >= 20){
  alert("grade D");
}else if (marks <20) {
  alert("grade E");
}
