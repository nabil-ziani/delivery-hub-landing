import ThemeController from "./theme-controller"

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 px-4">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">DeliveryHub</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <ThemeController />
                </button>
            </div>
        </div>
    )
}

export default Navbar