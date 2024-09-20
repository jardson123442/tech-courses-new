import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      {/* <div className="w-12 md:w-16 rounded-full overflow-hidden border-dark dark:border-gray  mr-2 md:mr-4">
        <Image
          src={bytecodeLogo}
          alt="CodeBucks logo"
          className="w-full h-12"
          sizes="20vw"
          priority
        />
      </div> */}

      <span className="font-bold dark:font-semibold text-2xl md:text-4xl">
        Rota
        <span className="text-accent dark:text-accentDark font-bold">Tech</span>
      </span>
    </Link>
  )
}

export default Logo
