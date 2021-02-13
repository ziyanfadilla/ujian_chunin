fetch('https://dhiyo-api-article.herokuapp.com/articles')
        .then(response => response.json())
        .then(json => json.data.map(data => {
            console.log(data.tittle);
        }))