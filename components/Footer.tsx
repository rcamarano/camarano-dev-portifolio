export default function Footer({ footerRef }) {
  return (
    <footer ref={footerRef} className="center flex justify-center space-x-4 bg-[#cbcbcb] p-4 text-xs">
      <p>2023® - All rigths reserved</p>
      <span>|</span>
      <a href="window.open('https://www.sitelock.com/verify.php?site=camarano.net','SiteLock','width=600,height=600,left=160,top=170');" target="_blank" rel="noopener noreferrer"
        className="font-medium text-orange-600" >
        <img className="img-fluid" alt="SiteLock" title="SiteLock" src="https://shield.sitelock.com/shield/camarano.net" /></a>
      <span>|</span>
        <a
        href="https://www.camarano.net/wp" target="_blank" rel="noopener noreferrer"
        className="font-medium text-orange-600"
      >
        RC - Consultoria Digital
      </a>
    </footer>
  );
}
