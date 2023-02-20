import css from './Footer.module.css'

const Footer = () => {
  return (
    <div className={css.flex}>
      <p>Built with love by <span>Ateli</span></p>
      <p>Copyright &copy; 2023 Uranus Academy</p>
    </div>
  );
};

export default Footer;
