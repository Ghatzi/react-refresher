const Footer = ({ length }) => {
  const today = new Date();

  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <p>
        {length} List {length === 1 ? 'item' : 'items'}
      </p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
