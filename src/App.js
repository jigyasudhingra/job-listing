import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Header } from "./Header";
import Bookmark from "./Bookmark";
import AppliedJobs from "./AppliedJobs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          paddingLeft: "3%",
          paddingRight: "3%",
        }}
      >
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/applied-jobs" element={<AppliedJobs />} />
            <Route path="/bookmarks" element={<Bookmark />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
