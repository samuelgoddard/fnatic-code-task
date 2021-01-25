import Container from '../components/container'

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full pt-3 pb-4" role="contentinfo">
      <Container>
        <div className="flex flex-wrap items-center">
          <img src="/wordmark.svg" alt="Fnatic Wordmark" className="w-24 inline-block" />
          <span className="ml-auto text-2xs uppercase tracking-wide">By <a className="underline hover:text-orange focus:text-orange focus:outline-none" href="https://samgoddard.co.uk" target="_blank" rel="nonopener noreferrer">Sam</a> for <a className="underline hover:text-orange focus:text-orange focus:outline-none" href="https://fnatic.com" target="_blank" rel="nonopener noreferrer">Fnatic</a></span>
        </div>
      </Container>
    </footer>
  )
}