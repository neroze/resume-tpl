import React from "react";

export const recommendationBlock = ({ recommendationData }) => (
  <section
    className={`${recommendationData.client_name} recommendation`}
    data-sr="wait 0.3s, enter left"
  >
    <img alt="" src={`../images/${recommendationData.profile_pic}`} />
    <h3 className="green">{recommendationData.client_name}</h3>
    <div className="position">
      {recommendationData.client_position &&
        recommendationData.client_position.map(position => (
          <span className="client-position" key={position}>
            {position}
            <br />
          </span>
        ))}
    </div>
    <i className="fa quote fa-quote-left quote" />
    <span className="message">{recommendationData.recommendation}</span>
  </section>
);

export default recommendationBlock;
