import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from "react-icons/bs"

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-h-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-lg font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
                Munene's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-4 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://admin-dashboard-tk.vercel.app/"
                  target="_blank"
                  rel="nooperner noreference"
                >
                  Admin Dashboard
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="nooperner noreference"
                >
                  Munene's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="FOLLOW US" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/mraiyuu/"
                  target="_blank"
                  rel="nooperner noreference"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy</Footer.Link>
                <Footer.Link href="#">Terms and Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex items-center justify-between">
            <Footer.Copyright href="#" by="Munene's blog" year={new Date().getFullYear()} />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="https://github.com/mraiyuu" target="_blank" rel="noopener noreference" icon={BsGithub} />
            </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
