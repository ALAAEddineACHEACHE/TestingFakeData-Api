$(document).ready(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        method:"GET",
        dataType:"JSON",
        data:"",
        success:function(Liste){
            for(let i=0;i<4;i++){
                let div = $("<div style='border:1px solid black'></div>");
                let h1 = $(`<h1>${Liste[i].title}</h1>`);
                div.append(h1);
                let p =$(`<p>${Liste[i].body}</p1>`);
                div.append(p);  
            $('.parent-post').append(div);   
                            
                
            }
        },
        error:function(){
            console.log("erreur");
        }

         });

         //recuperation de photos
         $.ajax({
            url:"https://jsonplaceholder.typicode.com/photos",
            method:"GET",
            dataType:"JSON",
            success:function(photos){
                 for(let i=0;i<4;i++){
                     let parentphotos=$("<div style='border:1px solid red'></div>");
                    let h1 = $(`<h1>${photos[i].title}</h1>`);
                    let img =$(`<img src="${photos[i].url}" width="200" height="200"/>`);
                    parentphotos.append(h1);
                parentphotos.append(img);   
                $(".parent-photos").append(parentphotos);
                }
            },
            error:function(){
                console.log("erreur");
            }
    
             });
             
             //Affichage du poste à travers ce que saisis l'utilisateur
        $('form').on("submit",function(e){
            e.preventDefault();
            let id = $('#post').val();
            $.ajax({
                url:`https://jsonplaceholder.typicode.com/posts/${id}`,
                method:"GET",
                dataType:"JSON",
                success:function(postesid){
                    let reponsediv=$("#reponse");
                        let title= $(`<h1>${postesid.title}</h1>`);
                        let body = $(`<p>${postesid.body}</p>`);
                        reponsediv.append(title);
                        reponsediv.append(body);
                    
                    
                },
                error:function(){
                    console.log("erreur");
                }
        
                 });

        })
        let post={
            userId:11,
            title:"Titre X modifé",
            body:"le post X a été modifié"
        };
        //Ajouter
        $.ajax({
            url:`https://jsonplaceholder.typicode.com/posts/`,
            method:"POST",
            dataType:"JSON",
            data:"post",
            success:function(Ajouter){
                console.log("ça marche")
             console.log(Ajouter);
            },
            error:function(){
                console.log("erreur");
            }
             });
    //Modifier
             $.ajax({
                url:`https://jsonplaceholder.typicode.com/posts/1`,
                method:"PUT",
                dataType:"JSON",
                data:"post",
                success:function(modifier){
                    console.log("ça marche")
                 console.log(modifier);
                },
                error:function(){
                    console.log("erreur");
                }
                 });
        //DELETE
                 $.ajax({
                    url:`https://jsonplaceholder.typicode.com/posts/1`,
                    method:"DELETE",
                    dataType:"JSON",
                    data:"post",
                    success:function(DELETE){
                        console.log("ça marche")
                     console.log(DELETE);
                    },
                    error:function(){
                        console.log("erreur");
                    }
                     });
        //Weather App
        let cityname="rabat";
        let APIkey="51f3a0a590fa4c63481b5e88e2dd5b5d";
        let APIurl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`;
                     $.ajax({
                        url:APIurl,
                        method:"GET",
                        dataType:"JSON",
                        success:function(weather){
                            console.log(weather);
                        
                        },
                        error:function(){
                            console.log("erreur");
                        }
                         });


    });


















