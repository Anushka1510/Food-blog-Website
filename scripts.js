document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        {
            title: "Puranpoli",
            content: "Best cusine for Maharshtrian people.",
            link: "file:///C:/Users/anush/Downloads/Foodblogs/Puranpoli.html"
        },
        {
            title: "Modak",
            content: "A classic Maharshtrian dish.",
            link: "file:///C:/Users/anush/Downloads/Foodblogs/ukadhandi.html"
        },
        {
            title: "Amras",
            content: "A warm and comforting cusine of mangos",
            link: "#"
        }
    ];

    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const article = document.createElement('article');
        
        const title = document.createElement('h3');
        title.textContent = post.title;
        
        const content = document.createElement('p');
        content.textContent = post.content;
        
        const readMore = document.createElement('a');
        readMore.textContent = "Read more";
        readMore.href = post.link;

        article.appendChild(title);
        article.appendChild(content);
        article.appendChild(readMore);
        
        postsContainer.appendChild(article);
    });
});
