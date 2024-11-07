import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./index";
import CompaniesPage from "./companies";
import CompanyPage from "./company";
import UsersPage from "./users";
import { Theme } from "../../types";
import { useSelector } from "react-redux";
import { getTheme } from "../../model/data";
import Layout from "../../components/layout";

const router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/companies" Component={CompaniesPage} />
        <Route path="/company/:id" Component={CompanyPage} />
        <Route path="/users" Component={UsersPage} />
      </Routes>
    </Layout>
  );
};

export default router;
