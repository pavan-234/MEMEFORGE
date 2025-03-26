// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} MemeForge. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;