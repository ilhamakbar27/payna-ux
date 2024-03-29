// import Nav from "./components/Nav";

import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// import { useState } from "react";
// import Loginpage from "./views/Loginpage";
// import Footer from "./components/Footer";
// import Nav from "./components/Nav";
// import Pages from "./views/Pages";

// function App() {
//   // const isLogin = false;
//   // const [loading,setLoading] = useState(false)
//   const [isLogin, setLogin] = useState(false);
//   // const [isHome, setHome] =useState(false);
//   const handleLogin = () => {
//     setLogin(true);
//   };
//   return (
//     <>
//       {isLogin ? (
//         <>
//           <Loginpage />
//         </>
//       ) : (
//         // Your code for rendering when isLogin is false
//         <>
//           <Nav login={isLogin} onLogin={handleLogin} />
//           <Pages />
//           <Footer />
//         </>
//       )}
//     </>
//   );
// }

// export default App;
