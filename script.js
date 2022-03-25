let World =  document.getElementById("world")
        let news = document.querySelector(".news")
       



       async function raw(){
            let urlLink = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5f16d58af027486cb98c941f5d6db33e`;
            let jsonData = await fetch(urlLink)
            let data = await jsonData.json()
            data.articles.map((d)=>{
                let {author,content,description,publishedAt,title,url,urlToImage} = d;
              
 console.log(d)
                news.innerHTML+=`
            <a href=${url}><div class="box">
                <img src=${urlToImage} class="newsImage"  alt="image"/>
                <div class="title">${title}</div>
                <div class="content">${content}</div>
                <div class="date">${publishedAt}</div>
            </div></a>
            `
            
           
             
            })
            
       }
       raw()  

        
        
   
        
