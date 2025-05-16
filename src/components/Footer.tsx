
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-12">
      <div className="container mx-auto px-6">
        <p className="text-gray-600">
          © {new Date().getFullYear()} TrendTeller. Crafted with ❤️ by Lovable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
