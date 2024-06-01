import Layout from "layouts/Layout/Layout";
import { memo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Budget, Projects, Schedule } from "views";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/schedule" />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </Layout>
  );
}

export default memo(App);
