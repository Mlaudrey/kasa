import React from 'react';
import './Collapse.scss';
import downArrow from '../../assets/Image/down-arrow.png';
import { paragraph, list } from '../../assets/Constante/Constante';
import PropTypes from 'prop-types';

const Collapse = ({ type, title, description = '', equipments = [] }) => {
  const [isShown, setIsShown] = React.useState(false);

  const toggle = () => setIsShown((prev) => !prev);

  const renderParagraph = () => (
    <p className="section-description">{description}</p>
  );

  const renderList = () => (
    <ul className="section-description">
      {equipments.length > 0 ? (
        equipments.map((item, index) => (
          <li key={index} className="section-li">
            {item}
          </li>
        ))
      ) : (
        <li>Aucun équipement disponible.</li>
      )}
    </ul>
  );

  const renderContent = () => {
    if (type === paragraph) {
      return renderParagraph();
    } else if (type === list) {
      return renderList();
    }
    return null;
  };

  const iconStyle = {
    height: '12px',
    transition: 'transform 0.3s ease',
    transform: isShown ? 'rotate(180deg)' : 'rotate(0)',
  };

  return (
    <article key={title} className="section">
      <div onClick={toggle} className="section-title-container">
        <h3 className="section-title">{title}</h3>
        <img
          src={downArrow}
          className="section-icon"
          alt="icône d'ouverture ou fermeture."
          style={iconStyle}
        />
      </div>
      {isShown && <div className="section-content">{renderContent()}</div>}
    </article>
  );
};

Collapse.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  equipments: PropTypes.array,
};

export default Collapse;
