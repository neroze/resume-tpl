import React from "react";
import RecommendationBlock from "./recommendationBlock";

const recommendationsSection = ({ recommendationList }) => (
  <section className="people recommendation-section">
    <h1 className="purple">RECOMMENDATIONS</h1>
    {recommendationList &&
      recommendationList.map(recommendation => (
        <RecommendationBlock
          key={recommendation.client_name}
          recommendationData={recommendation}
        />
      ))}
  </section>
);

export default recommendationsSection;
