import { useState, useEffect } from "react";
import google from './assets/Google__G__logo.svg.png';
import { Link} from "react-router-dom";

export default function Signup() {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fullText = "I can't wait to get started";
    let i = 0;
    let displayText = "";
    
    const typeChar = () => {
      if (i < fullText.length) {
        displayText += fullText[i];
        setTitle(displayText);
        i++;
        setTimeout(typeChar, 35);
      }
    };
    
    setTitle("");
    typeChar();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <main className="w-full max-w-md mx-auto p-6 flex flex-col items-center relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-44 h-44 bg-teal-500 bg-opacity-80 blur-2xl rounded-full animate-pulse"></div>
      <h1 className="mt-40 text-2xl font-bold text-center text-black mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: "700", textAlign: "center" }}>
        {title}
      </h1>
      <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-sm text-black font-medium">email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          className="w-full p-2 border border-gray-300 rounded-md text-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className="text-sm text-black font-medium">password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          className="w-full p-2 border border-gray-300 rounded-md text-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="mt-4 p-3 text-lg bg-white border-2 border-black rounded-lg cursor-pointer font-semibold hover:bg-gray-100"
        >
          sign up
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600 text-sm">
        already have an account? <Link
          to="/login"
          className="text-teal-500 font-medium"
        >
          Log in
        </Link>
        
      </p>

      <div className="flex items-center my-4 w-full text-gray-500">
        <hr className="flex-1 border-gray-300" />
        <span className="px-2">or</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <button
        className="w-full flex items-center justify-center border-2 border-black bg-white p-3 rounded-lg text-lg font-semibold hover:bg-gray-100"
        onClick={() => window.location.href = '/auth/google'}
      >
        <img
          src={google}
          alt="Google Logo"
          className="w-6 h-6 mr-2"
        />
        Sign up with Google
      </button>

      <p className="mt-6 text-xs text-center text-gray-500 max-w-sm">
        by signing up, you agree to our <a href="#" className="text-teal-500 font-medium">terms of service</a>,
        <a href="#" className="text-teal-500 font-medium"> privacy policy</a> and acknowledge our
        <a href="#" className="text-teal-500 font-medium"> ai disclaimer</a>
      </p>
    </main>
  );
}
