import React from "react";
import { HeritageData } from "../Components/HeritageData";
import HeritageItem from "../Components/HeritageItem";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function HeritagePage() {
  const [searchParams] = useSearchParams();
  const area = searchParams.get("area");

  const filteredData = HeritageData[area] || [];

  return (
     <>
 <Navbar/>
    <div>
      

      {filteredData.map((item) => (
        <HeritageItem
          key={item.id}
          name={item.name}
          images={item.images}
          story={item.story}
          cost={item.cost}
          weather={item.weather}
        />
      ))}
    </div>
      <Footer/>
        </>
  );
}

export default HeritagePage;

