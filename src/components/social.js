import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCoffee, faQuoteLeft);

const social = () => (
  <div id="quick_links">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/niroze.maharjan"
      data-sr="wait 0.4s, enter bottom"
    >
      <FontAwesomeIcon icon={["fab", "facebook"]} />

      {/* <i className="fa fa-facebook fa-2x" /> */}
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://np.linkedin.com/pub/niraj-maharjan/31/817/998"
      data-sr="wait 0.3s, enter top"
    >
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/neerooze"
      data-sr="wait 0.5s, spin 80deg, roll 20deg"
    >
      {/* <i className="fa fa-twitter fa-2x" /> */}
      <FontAwesomeIcon icon={["fab", "twitter"]} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/neroze"
      data-sr="wait 0.2s, spin 90deg, roll 100deg"
    >
      <FontAwesomeIcon icon={["fab", "github"]} />
    </a>
  </div>
);

export default social;
