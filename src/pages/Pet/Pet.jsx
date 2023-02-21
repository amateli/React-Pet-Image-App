import { Link, useParams } from "react-router-dom";
import css from './Pet.module.css'
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getPetImage } from "../../lib";

const Pets = ['cat', 'dog', 'fox', 'duck'];
const Pet = () => {
  let {petName} = useParams();
  
  const handleClick = () => {
    getPetImage(petName).then((petImage) => setPetImage(petImage));
  }

  const [petImage, setPetImage] = useState('https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
  useEffect(() => {
    // getPetImage(petName).then((petImage) => setPetImage(petImage));
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
