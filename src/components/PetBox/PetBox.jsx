import { Link } from 'react-router-dom';
import style from'./PetBox.module.css'

const PetBox = ({ backgroundColor, image, label }) => {
  return (
    <Link className={style.link} to = {'pet/' + label.toLowerCase()}>
      <div className={style.container} style={{backgroundColor}}>
        <img src={image} alt={label + ' image'} />
        <p className={style.petName}>{label}</p>
      </div>
    </Link>
  );
};

export default PetBox;
