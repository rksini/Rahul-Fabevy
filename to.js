    var text = document.getElementById('text');
    var btn = document.getElementById("btn");
    var output = document.getElementById("display");

    btn.addEventListener('click', function() {
        var para = document.createElement("p");
        para.textContent = text.value; // Set the text content of the paragraph
      output.appendChild(para); // Append the new paragraph to the output element
    
    var butt = document.createElement("button");
    butt.textContent="Remove";
    output.appendChild(butt);
    butt.addEventListener('click',function()
    {
        para.remove();
        butt.remove();
        edt.remove();
        done.remove();
    })  

    var edt = document.createElement("button");
    edt.textContent="Edit";
    output.appendChild(edt);
    edt.addEventListener("click",function()
    {
     done.style.visibility="visible";
     para.contentEditable = true;
     para.style.backgroundColor = "#dddbdb";
    
})

    var done = document.createElement("button");
    done.textContent="Done";
    output.appendChild(done);
    done.style.visibility="hidden";
    done.addEventListener("click",function()
    {
        para.contentEditable = false;
        done.style.visibility="hidden";
        
    })
    
         
    
    });




