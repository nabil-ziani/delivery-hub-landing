import { useTranslations } from "next-intl"

const Hero = () => {
    const t = useTranslations("hero")

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">{t("title")} 🚧</h1>
                    <p className="py-6">{t("description")}</p>
                    <button className="btn btn-primary">{t("action")}</button>
                </div>
            </div>
        </div>
    )
}

export default Hero