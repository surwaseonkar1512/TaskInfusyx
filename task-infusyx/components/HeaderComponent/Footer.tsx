const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-cyan-500 to-teal-700 text-white py-10">
      <div className="max-w-[1200px] container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="font-bold text-lg">Uzbekistan Medi</h2>
          <p className="mt-2 text-sm">
            Uzbekistan Medi is your trusted guide to pursuing MBBS in
            Uzbekistan. We connect aspiring doctors with top universities,
            offering affordable education and globally recognized degrees. Start
            your medical journey with us today!
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg">Services</h2>
          <ul className="mt-2 text-sm space-y-2">
            <li>Home</li>
            <li>Universities</li>
            <li>MBBS in Uzbekistan</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg">Company</h2>
          <ul className="mt-2 text-sm space-y-2">
            <li>About Us</li>
            <li>Blogs</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg">Contact us</h2>
          <ul className="mt-2 text-sm space-y-2">
            <li>
              <span className="mr-2">📞</span> 343455645
            </li>
            <li>
              <span className="mr-2">📧</span> mangcoding123@gmail.com
            </li>
            <li>
              <span className="mr-2">📍</span> 2972 Westheimer Rd, Santa Ana,
              Illinois 85486
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-white/20 mt-10 pt-4 text-sm">
        Uzbekistan Medi © 2025 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
