import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <div>
            <Link href='/' className='flex items-center gap-x-4'>
                <Image
                    src="/logo.png"
                    height={48}
                    width={48}
                    alt="logo"
                />
                <p className="hidden sm:block font-semibold text-xl ">
                    DeliveryHub
                </p>
            </Link>
        </div>
    )
}

export default Logo