import Header from "@/components/header";
const UserPagesLayout = ({
children
}: {
    children:React.ReactNode
}) => {
    return(
        <>
    <Header />
<div className="max-w-3xl mx-auto pt-[27px]">
    {children}</div></>
    )
}
export default UserPagesLayout;