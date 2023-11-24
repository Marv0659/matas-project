import { Card } from "antd";
import React from "react";
import { useEffect, useState } from "react";
import CardTest from "./CardTest";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://auoiblhjqpxvkztdmjis.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b2libGhqcXB4dmt6dGRtamlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE2MTYsImV4cCI6MjAxMjQyNzYxNn0.oNoBo2kBItmIqvZYDT2aABrQe32vvi-dhmSp92jEpcA";

const supabase = createClient(supabaseUrl, supabaseKey);

const ResultatStepContent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("matas").select("*"); // replace 'your_table_name' with your actual table name

        if (error) {
          throw error;
        }

        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid-container">
      {data ? (
        data.map((item) => (
          // Render your data here
          <CardTest img={`./img/products/${item.img}`} text={item.productname} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ResultatStepContent;
