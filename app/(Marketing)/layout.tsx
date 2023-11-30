import {Navbar} from "./_components/navbar"

const MarketingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return(
        <div className="h-full dark:bg-[#1f1f1f]">
            <Navbar />
            <main className="pt-40 dark:bg-[#1f1f1f]">
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout