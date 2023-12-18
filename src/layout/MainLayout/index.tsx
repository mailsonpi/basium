import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import SiteHead from "@/components/SiteHead";
import Footer from "../Footer";
import Drawable from "../Navbar/Drawable";

interface IProps {
    children: React.ReactNode;
    navbar: {
        hasNavbar?: boolean;
        colorTheming?: "ligthPink" | "darkCyan";
    };
}

const MainLayout: React.FC<IProps> = ({ children, navbar }) => {
    return (
        <>
            <SiteHead />
            {navbar.hasNavbar && (
                <>
                    <Navbar colorTheming={navbar.colorTheming} />
                    <Drawable colorTheming={navbar.colorTheming} />
                </>
            )}
            <Box mt={"20"}>{children}</Box>
            <Footer />
        </>
    );
};

export default MainLayout;
