import { Card } from "antd";
import React from "react";
import { useEffect, useState } from "react";
import CardTest from "./CardTest";

function ResultatStepContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b2libGhqcXB4dmt6dGRtamlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE2MTYsImV4cCI6MjAxMjQyNzYxNn0.oNoBo2kBItmIqvZYDT2aABrQe32vvi-dhmSp92jEpcA";
      const apiUrl = "https://auoiblhjqpxvkztdmjis.supabase.co/rest/v1/matas";

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            apikey: apiKey,
            // Add any other headers if required
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
        console.log(result, "test");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <CardTest text={item.Productname} img={item.img} />
      ))}
    </div>
  );
}

export default ResultatStepContent;
