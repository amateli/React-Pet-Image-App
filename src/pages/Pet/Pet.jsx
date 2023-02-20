import { Link, useParams } from "react-router-dom";
import css from './Pet.module.css'
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getPetImage } from "../../lib";

const Pets = ['cat', 'dog', 'fox', 'duck'];
const Pet = () => {
  let {petName} = useParams();
  
  const handleClick = () => {
    console.log(petImage)
    setPetImage(petImage)
  }

  const [petImage, setPetImage] = useState('');
  useEffect(() => {
    getPetImage(petName).then((petImage) => setPetImage(petImage));
  });

  if (!Pets.includes(petName)) {
    return <h1>Pet not available</h1>;
  }
  
  return (
    <div className={css.response}>
      <nav className={css.nav}>
        <Link to = '/'><img src="../images/Arrow.svg" alt="back-arrow" /></Link>
        <h2>{petName}</h2>
      </nav>
      <div>
        {/* {" "} */}
        <img className={css.petPic} src= {petImage} alt={petName} />
      </div>
      <button onClick={handleClick} className={css.Random}>Another One 
        {/* {" "} */}
        <img src="../images/Shuffle.svg" alt="shuffle" />
      </button>
      <Link className={[css.link, css.petRand].join(' ')} to= '/'>Back Home</Link>
      <Footer />
    </div>
  );
};

export default Pet;
