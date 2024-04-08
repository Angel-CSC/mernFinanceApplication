import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "@/scenes/navbar";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  /*
  CSSBaseline gives a nice css default to start from

  */
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Navbar/>
              <Routes>
                <Route path="/" element={<div>dashboard page</div>}/>
                <Route path="/predictions" element={<div>predicitions page</div>}/>
              </Routes>
            </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
