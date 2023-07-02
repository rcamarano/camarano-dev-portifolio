export default function Footer({ footerRef }) {
  return (
    <footer ref={footerRef} className="center flex justify-center space-x-4 bg-[#cbcbcb] p-4 text-xs">
      <p>2023® - All rigths reserved</p>
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
