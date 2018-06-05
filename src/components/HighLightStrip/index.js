import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { hexToRgbA } from "../../../utils";
import { colors } from "../../styles/defaults";

const Wrapper = styled.div`
  padding: 16px;
  background: ${props =>
    props.theme
      ? hexToRgbA(props.theme.colorPrimary, 0.4)
      : hexToRgbA(colors.primary, 0.4)};
`;

const HighlightStrip = ({ children, ...props }) => {
  return <Wrapper>{children}</Wrapper>;
};

HighlightStrip.propTypes = {
  children: PropTypes.number.isRequired
};

export default HighlightStrip;
