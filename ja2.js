


function fetchData(){
xhr= new XMLHttpRequest();
var data;
xhr.onreadystatechange = function() {
if (this.readyState == 2 && this.status == 200) {
    // divMain.innerHTML = "FETCHING THE DATA";
    alert('PLEASE W8 ... checking u8 internet connection');
 }
   if (this.readyState == 4 && this.status == 200) {
   data=JSON.parse(this.responseText);
   console.log(this.responseText)

   var divMain= document.getElementById("resDetails");
   var child = divMain.lastElementChild;  
       while (child) {
           divMain.removeChild(child);
           child = divMain.lastElementChild;
       }

            
				    {
				    var res_name=data.Title;
				    var res_img=data.Poster;
				    var res_cuisines=data.Awards;
 					var res_writer=data.Writer;



				    
				    var divRes= document.createElement("div");

				var nameRes = document.createElement("h2");
				nameRes.innerHTML=res_name;
				divRes.appendChild(nameRes);

				var imgRes = document.createElement("img");
				imgRes.setAttribute("src",res_img);
				imgRes.setAttribute("height","100px");
				imgRes.setAttribute("width","100px");
				divRes.appendChild(imgRes);

				var lineBreak = document.createElement("br");
				divRes.appendChild(lineBreak);

				var cusRes = document.createElement("span");
				cusRes.innerHTML=res_cuisines;
				cusRes.setAttribute("style","font-family:Verdana;font-size:15px");
				divRes.appendChild(cusRes);

				var lineBreak = document.createElement("br");
				divRes.appendChild(lineBreak);


				var writerRes = document.createElement("h4");
				writerRes.innerHTML=res_writer;
				divRes.appendChild(writerRes);


                var lineBreak = document.createElement("br");
				divRes.appendChild(lineBreak);




			
				divMain.appendChild(divRes);

				var lineBreak = document.createElement("br");
				divMain.appendChild(lineBreak);
      }
       }
};
xhr.open("GET","http://www.omdbapi.com/?apikey=490362b7&t=game+of+thrones");
xhr.send();
}




