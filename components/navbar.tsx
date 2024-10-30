import LanguageController from "./language-controller"
import Logo from "./logo"
import ThemeController from "./theme-controller"

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 px-4 sm:px-8 md:px-12">
            <div className="flex-1">
                <Logo />
            </div>
            <div className="flex-none gap-2">
                <button className="btn btn-square ">
                    <ThemeController />
                </button>
                <LanguageController />
            </div>
        </div>
    )
}

export default Navbar