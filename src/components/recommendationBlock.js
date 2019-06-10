import React from "react";

export const recommendationBlock = ({ recommendationData }) => (
  <section
    className={recommendationData.client_name}
    data-sr="wait 0.3s, enter left"
  >
    <img alt="" src={`../images/${recommendationData.profile_pic}`} />
    <h1 className="green">{recommendationData.client_name}</h1>
    <div className="position">
      {recommendationData.client_position &&
        recommendationData.client_position.map(position => (
          <span className="client-position" key={position}>
            {position}
            <br />
          </span>
        ))}
    </div>
    <i className="fa quote fa-quote-left" />
    <span className="recommendation">{recommendationData.recommendation}</span>
  </section>
);

export default recommendationBlock;
