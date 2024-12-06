import "./App.css";
import SignForm from "./component/SignForm";
import VerifyForm from "./component/VerifyForm";
function App() {
  return (
    <div className="min-h-screen bg-zinc-900 bg-[url('/crypto-bg.png')] bg-repeat py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 opacity-10 animate-gradient"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-6xl font-extrabold text-center text-green-400 mb-4 tracking-tight animate-pulse">
          Digital Signature RSA SHA3
        </h1>
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text text-3xl font-bold animate-shimmer">
            Kelompok 8
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <SignForm />
          <VerifyForm />
        </div>
      </div>
    </div>
  );
}

export default App;
