import React from "react";

/**
 * The wireframe frame every card, figure and primary button wears:
 * square corners, a hairline border, and four "+" registration marks.
 */
const Blueprint = ({ as: Tag = "div", className = "", children, ...rest }) => (
  <Tag className={"blueprint " + className} {...rest}>
    <i className="corner tl" />
    <i className="corner tr" />
    <i className="corner bl" />
    <i className="corner br" />
    {children}
  </Tag>
);

export default Blueprint;
