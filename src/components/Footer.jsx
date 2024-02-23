import React from "react";
import {
  GiBookshelf,
  GiBabyfootPlayers,
  GiTabletopPlayers,
  GiBookPile,
} from "react-icons/gi";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-gray-100 footer-area">
        <div className="mb-16 mx-auto px-12 footer-widget">
          <div className="container">
            <div className="row">
              <div className="w-full">
                <div className="items-end justify-between block mb-8 footer-logo-support md:flex">
                  <div className="flex items-end footer-logo">
                    <a className="mt-8" href="index.html">
                      <img
                        src={logo}
                        className="img-fluid block h-10 w-15"
                        alt="Logo"
                      />
                    </a>

                    <ul className="flex mt-8 ml-8 footer-social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni-instagram-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
                <div className="mb-8 footer-link">
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">About</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Contact</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Career</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="mb-8 footer-link">
                  <h6 className="footer-title">Product & Services</h6>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Products</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Business</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Developer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-5/12 md:w-1/3 lg:w-1/4">
                <div className="mb-8 footer-link">
                  <h6 className="footer-title">Help & Suuport</h6>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Support Center</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">FAQ</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-7/12 md:w-1/2 lg:w-1/3">
                <div className="mb-8 footer-newsletter">
                  <h6 className="footer-title">Subscribe Newsletter</h6>
                  <div className="newsletter">
                    <form action="#" className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Your Email"
                        className="w-full py-3 pl-6 pr-12 duration-300 bg-gray-200 border border-gray-200 rounded-full focus:border-blue-600 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 mt-3 mr-6 text-xl text-blue-600"
                      >
                        <i className="lni-angle-double-right"></i>
                      </button>
                    </form>
                  </div>
                  <p className="font-medium text-gray-900">
                    Subscribe weekly newsletter to stay upto date. We don’t send
                    spam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f2f0ee;] footer-copyright">
          <div className="container">
            <div className="row">
              <div className="w-full">
                <div className="py-6 text-center">
                  <p className="">
                    Template Crafted by
                    <a
                      className="text-[#f3701d] duration-300 hover:text-[#f36b1d]"
                      rel="nofollow"
                      href="https://tailwindtemplates.co"
                    >
                      Jonah
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
