const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-[1440px] mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Layout