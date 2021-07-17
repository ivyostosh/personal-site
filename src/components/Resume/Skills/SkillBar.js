import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SkillBarContainer = styled.div`
  position:relative;
  display:block;
  margin-bottom:15px;
  width:100%;
  background: ${(props) => props.theme.myColor};
  height:35px;
  border-radius:3px;
  -moz-border-radius:3px;
  -webkit-border-radius:3px;
  -webkit-transition:0.4s linear;
  -moz-transition:0.4s linear;
  -ms-transition:0.4s linear;
  -o-transition:0.4s linear;
  transition:0.4s linear;
  -webkit-transition-property:width, background-color;
  -moz-transition-property:width, background-color;
  -ms-transition-property:width, background-color;
  -o-transition-property:width, background-color;
  transition-property:width, background-color;
`;

const SkillBar = ({ data, categories }) => {
  const { category, competency, title } = data;

  // TODO: Consider averaging colors
  const titleStyle = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  const barStyle = {
    ...titleStyle,
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
  };

  return (
    <SkillBarContainer>
      <div className="skillbar-title" style={titleStyle}><span>{title}</span></div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{competency} / 5</div>
    </SkillBarContainer>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;
