<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram</title>
    <style>
        *{
            background-color: black;
            color:white;
        }
        img{
            height: 200px;
            width : 200px;
        }
        button{
            color:red;
            background-color: antiquewhite;
        }
       
    </style>
</head>
<body>
    <h1>This page belongs to @<%=data.name%></h1>
    <button id="follow">Follow</button> &nbsp; &nbsp; &nbsp; &nbsp;
    <button id="msg">Message</button>

    <p><b>Followers :</b><%= data.followers %>
        &nbsp; &nbsp; &nbsp; &nbsp; <b>Following :</b><%= data.following %>
    </p>
   <hr>

    <%for(post of data.posts){%>
        <img src="<%=post.image%>" alt="alternate images">
        <p><b>Comments :</b><%= post.comments %>
            &nbsp; &nbsp; &nbsp; &nbsp;<b>Likes :</b><%= post.likes %>
        </p>
    <%}%>
    <script>
        let btn = document.querySelector("#follow");
        btn.addEventListener("click",()=>{
            alert("Follow this page successfully")
        });
        let btn1 = document.querySelector("#msg");
        btn1.addEventListener("click",()=>{
            btn.classList.add("flw");
           let msg= prompt("Type Your message");
           if(msg.value==null){
              alert("type any Message");
              prompt("Type Your message");
           }
           alert("message sent Successfully");
           });
           
    
    </script>
</body>
</html>
