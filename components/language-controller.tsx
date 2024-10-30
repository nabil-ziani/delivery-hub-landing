"use client"

import { usePathname, useRouter } from "next/navigation"
import { ChangeEvent } from "react"

const LanguageController = () => {
    const pathname = usePathname()
    const router = useRouter()

    const handleLanguageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newLocale = e.target.value
        const path = pathname.split('/').slice(2).join('/')

        router.push(`/${newLocale}/${path}`)
    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M11 5a.75.75 0 0 1 .688.452l3.25 7.5a.75.75 0 1 1-1.376.596L12.89 12H9.109l-.67 1.548a.75.75 0 1 1-1.377-.596l3.25-7.5A.75.75 0 0 1 11 5Zm-1.24 5.5h2.48L11 7.636 9.76 10.5ZM5 1a.75.75 0 0 1 .75.75v1.261a25.27 25.27 0 0 1 2.598.211.75.75 0 1 1-.2 1.487c-.22-.03-.44-.056-.662-.08A12.939 12.939 0 0 1 5.92 8.058c.237.304.488.595.752.873a.75.75 0 0 1-1.086 1.035A13.075 13.075 0 0 1 5 9.307a13.068 13.068 0 0 1-2.841 2.546.75.75 0 0 1-.827-1.252A11.566 11.566 0 0 0 4.08 8.057a12.991 12.991 0 0 1-.554-.938.75.75 0 1 1 1.323-.707c.049.09.099.181.15.271.388-.68.708-1.405.952-2.164a23.941 23.941 0 0 0-4.1.19.75.75 0 0 1-.2-1.487c.853-.114 1.72-.185 2.598-.211V1.75A.75.75 0 0 1 5 1Z" clipRule="evenodd">
                    </path>
                </svg>
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60 ml-"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-fit p-2 shadow-2xl">
                <li>
                    <input
                        onChange={handleLanguageChange}
                        type="radio"
                        name="language-dropdown"
                        className="language-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="EN"
                        value="en" />
                </li>
                <li>
                    <input
                        onChange={handleLanguageChange}
                        type="radio"
                        name="language-dropdown"
                        className="language-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label="NL"
                        value="nl" />
                </li>
            </ul>
        </div>
    )
}

export default LanguageController