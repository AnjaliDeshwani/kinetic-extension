import axios from "axios";
import { useEffect, useState } from "react";

export const Quote = () => {
  const [quoteData, setQuoteData] = useState({ quote: "", author: "" });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://api.quotable.io/random");
        setQuoteData({ quote: data.content, author: data.author });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div className="quote-section fx-col fx-ai-center fx-jc-sb">
      <span className="quote-text">"{quoteData.quote}"</span>
      <span className="quote-author">~ {quoteData.author}</span>
    </div>
  );
};
