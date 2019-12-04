function fetchData(){
xhr= new XMLHttpRequest();
xhr.open("GET","https://got-quotes.herokuapp.com/quotes");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    data=JSON.parse(this.responseText);
     console.log(data);


    
	    
	      var a=document.createElement("div");   
	     var name=document.createElement("li");
	     name.innerHTML=data.quote;
	     a.appendChild(name);
           document.getElementById("resDetails").appendChild(a);

           
       
	}
};

}
	    

         
