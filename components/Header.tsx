const Header = () => {
  return (
    <div className="text-center border-b border-slate-300 p-4 text-gray-500">
      <div className="text-2xl font-bold text-slate-700">Jehanne Hodge</div>
      <div className="">Web Developer</div>
      <div className="flex justify-center gap-2 text-sm">
        <div>email</div>
        <div>github</div>
        <div>linkedin</div>
      {/* add icons and links for other conact */}
      </div>

    </div>
  );
}

export default Header;