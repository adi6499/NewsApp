let World =  document.getElementById("world")
        let news = document.querySelector(".news")
       



       async function raw(){
            let urlLink = `https://newsdata.io/api/1/news?apikey=pub_577240758f86c3ad08fac83f64be9f10618b&q=news&country=in,ru,ua `;
            let jsonData = await fetch(urlLink)
            let data = await jsonData.json()
            console.log(data.results)
            data.results.map((d)=>{
                let {author,content,full_description,pubDate,title,link,image_url} = d;
            
                if(image_url==null){
                   image_url=" http://writtent.com/blog/wp-content/uploads/2014/04/How-to-write-damn-good-headlines.jpg"
            
                }else if(full_description==undefined){
                    full_description="No Info"
                }
                news.innerHTML+=`
            <a href=${link}><div class="box">
                <img src=${image_url} class="newsImage"  alt="image"/>
                <div class="title">${title}</div>
                <div class="content">${full_description}</div>
                <div class="date">${pubDate}</div>
            </div></a>
             `
            let image = document.querySelectorAll(".newsImage")
          
           
             
            })
            
       }
       raw()  

        

        
        
   
        
