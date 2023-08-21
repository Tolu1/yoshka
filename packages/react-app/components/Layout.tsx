import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
        {/* <SkeletonTheme baseColor="#F3F4F6" highlightColor="#FFFFFF"> */}
        <SkeletonTheme baseColor="#202A38" highlightColor="#2C3645">
            <div className="bg-gray-700 overflow-hidden flex flex-col min-h-screen">
                <Header />
                <div className="py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
                    {children}
                </div>
                <Footer />
            </div>
        </SkeletonTheme>
        </>
    );
};

export default Layout;
