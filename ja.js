function fetchData(){
xhr= new XMLHttpRequest();
xhr.open("GET","https://www.anapioficeandfire.com/api/houses");
xhr.send();

var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    data=JSON.parse(this.responseText);
     console.log(data);
	    	for(i=0;i<data.length;i++)
	    	{
	      var a=document.createElement("div");
	    var name= document.createElement("li");
	    name.innerHTML=data[i].name;
	    var id=document.createElement("li");
	    id.innerHTML=data[i].region;
	    var id=document.createElement("li");
	    id.innerHTML=data[i].words;
	     
	     a.appendChild(name);
	     a.appendChild(id);
           document.getElementById("resDetails").appendChild(a);


           
       }
	}
};

}