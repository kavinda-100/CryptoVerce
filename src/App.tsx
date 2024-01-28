// router imports
import { BrowserRouter, Route, Routes } from "react-router-dom"
// Pages
import {Home, CryptoCurrencies, Missing, Exchanges, News, CryptoDetails} from "./pages"
import MainLayOut from "./components/layouts/MainLayOut"

// Theme
import { ThemeProvider } from "@/context/ThemeProvider"

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <BrowserRouter>
    <Routes>
      // Main Routes
      <Route path="/" element={<MainLayOut />}>
        <Route index element={<Home />} />
        <Route path="crypto" element={<CryptoCurrencies />} />
        <Route path="crypto/:coinId" element={<CryptoDetails />} />
        <Route path="exchanges" element={<Exchanges />} />
        <Route path="news" element={<News />} />
      </Route>
      // 404
      <Route path="*" element={<Missing />} />
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
      
  )
}

export default App
