// router imports
import { BrowserRouter, Route, Routes } from "react-router-dom"
// Pages
import {Home, Dashboard, CryptoCurrencies, Missing, Exchanges, News, CryptoDetails} from "./pages"
import {DashboardLayOut, MainLayout} from "./components/layouts"

// Theme
import { ThemeProvider } from "@/context/ThemeProvider"

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <BrowserRouter>
    <Routes>
      // Home Routes
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      // Dashboard Routes
      <Route path="/dashboard" element={<DashboardLayOut />}>
        <Route index element={<Dashboard />} />
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
