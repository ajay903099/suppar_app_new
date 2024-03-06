import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState("");
  
  console.log(news);
  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-02-06&sortBy=publishedAt&apiKey=4a87115493a34712b852e8ae7d3a0a33"
      )
        .then(async (data) => await data.json())
        .then((res) => setNews(res.articles[0]));
    };
    fetchNews();
  }, []);
 
  return (
    <div
      style={{
        height: "90vh",
        width: "30vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",
      }}
    >
      <img
        src={news.urlToImage}
        style={{ height: "60vh", borderRadius: "12px", width: "30vw" }}
      />
      <div
        style={{
          height: "50vh",
          borderRadius: "12px",
          width: "30vw",
          background: "white",
          fontSize: "1.5rem",
          padding: "6px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center"
        }}
      >
        {news.description}
      </div>
      <div
        style={{
          position: "absolute",
          width: "30vw",
          height: "30vh",
          background: "rgba(0, 0, 0, 0.74)",
          top: "31vh",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <p style={{ color: "white", fontSize: "1.5rem", marginBottom: "10px" }}>
          {news.title}
        </p>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
        </span>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
        </span>
      </div>
    </div>
  );
};

export default News;
