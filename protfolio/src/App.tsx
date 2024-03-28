import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Sign from "./pages/signUp";
import CountriesQuizPage from "./pages/countriesQuiz";
import { calcLength } from "framer-motion";
import KnowledgeQuizPage from "./pages/knowledgeQuiz";
import { ContextProvider } from "./context/quizContext";
import { FlashcardProvider } from "./context/flashcardContext";
import FlashcardMakerPage from "./pages/Flashcard";
import Profile from "./pages/profile";

interface User {
  id: number;
  firstName: string;
  email: string;
  password: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      firstName: "test",
      email: "test",
      password: "test",
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignup = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  console.log(users, "user");

  const handleLogin = (email: string, password: string) => {
    // Check if user exists with provided email and password
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
    } else {
      // Handle invalid login
      console.log("Invalid credentials");
    }
  };

  return (
    <BrowserRouter>
      <ContextProvider>
        <FlashcardProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
              }
            />
            <Route
              path="/signup"
              element={<Sign users={users} handleSignup={handleSignup} />}
            />
            <Route path="/map" element={<CountriesQuizPage />} />
            <Route path="/knowledge" element={<KnowledgeQuizPage />} />
            <Route path="/flashcard" element={<FlashcardMakerPage />} />
            <Route path="/profile" element={<Profile id={0} firstName={"gege"} email={"gege"} password={"gege"} />} />
            {/* <Route path="users/:id" element={<Users />} /> */}
          </Routes>
        </FlashcardProvider>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
