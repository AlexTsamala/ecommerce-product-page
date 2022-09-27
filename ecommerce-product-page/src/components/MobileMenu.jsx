const MobileMenu = (props) => {
    return (
        <div className=" bg-0.5 top-0 left-0 fixed h-screen w-screen">
            <div className=" bg-white h-full w-menuWidth p-6">
                <svg onClick={props.controlMenu} width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/>
                </svg>
                <div className="flex flex-col mt-12 gap-5 text-lg text-neutral-800 font-bold">
                    <span>Collections</span>
                    <span>Men</span>
                    <span>Women</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>
      );
}
 
export default MobileMenu;