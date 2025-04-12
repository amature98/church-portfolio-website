import {useState, useEffect}  from "react";
import Page from "./Page";
import Header from "../Components/Header/Header";
import BgImage from "../Images/resources.jpg";

import { Container, Card } from "@mui/material";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://pceamukinyi.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error fetching posts", err));
  }, []);

  return (
    <Page title="Articles - PCEA Mukinyi Parish">
      <Header
        title="Articles"
        bgimage={BgImage}
        height="70vh"
      />
      <Container>
        {articles.map((article) => (
          <Card key={article.id}>
            <Card.Body>
              <Card.Title>{article.title.rendered}</Card.Title>
              <Card.Text>{article.excerpt.rendered}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </Page>
  );
}

export default ArticlesPage;
