import Footer from "../../components/Footer/Footer";
import PetBox from "../../components/PetBox/PetBox";
import css from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={css.response}>
        <h2>Randomly generates cute images of pets</h2>
        <p>Select any of these options to get started</p>
        <div className={css.petBoxGrid}>
          <PetBox
            label="Cat"
            image="/images/cat.svg"
            backgroundColor="#C9C9C926"
          />
          <PetBox
            label="Dog"
            image="/images/dog.svg"
            backgroundColor="#F2955526"
          />
          <PetBox
            label="Fox"
            image="/images/fox.svg"
            backgroundColor="#EBC9A026"
          />
          <PetBox
            label="Duck"
            image="/images/duck.svg"
            backgroundColor="#F0C41926"
          />
        </div>
        <p className={css.bp}>Pick one at random</p>
        <Footer />
      </div>
      <div className="out1 cornPics ">
        <img src="/images/ShadeCat.svg" alt="cat-on-shades" />
      </div>
      <div className="out2 cornPics">
        <img src="/images/SweatshirtDog.svg" alt="sweatShirt-dog" />
      </div>
    </>
  );
};

export default Home;
