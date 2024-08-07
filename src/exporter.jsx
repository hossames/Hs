// importing all resources
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import UserReducer from "./store/userSlice";
import { Slide, Fade } from "react-awesome-reveal";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Store } from "./store/store";
import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Home, Login, ForgetPassword, SignUp , PanelHome , PanelProducts , Users , AdminPanel } from "./pages/exportPages";
import { Header, Footer, Logo } from "./component/exportComponent";
import { toBase64, URLs } from "./functions";
import { App } from "./App";
import {
  FaRegUserCircle,
  FaShoppingCart,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import React, { useState, useEffect, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import { setUserDetails } from "./store/userSlice";
import Router from "./routes";
import { Context } from "./context";
// export all needed components
export {
  toBase64,
  configureStore,
  AdminPanel,
  Users,
  PanelHome,
  PanelProducts,
  setUserDetails,
  Slide,
  Fade,
  createSlice,
  UserReducer,
  useSelector,
  useDispatch,
  Provider,
  Store,
  URLs,
  ToastContainer,
  toast,
  useNavigate,
  Home,
  Login,
  ForgetPassword,
  SignUp,
  App,
  FaRegUserCircle,
  FaShoppingCart,
  FaEye,
  FaEyeSlash,
  GrSearch,
  Link,
  Logo,
  Header,
  Footer,
  Outlet,
  React,
  ReactDOM,
  Router,
  useEffect,
  useState,
  useContext,
  createContext,
  RouterProvider,
  createBrowserRouter,
  Context,
};
