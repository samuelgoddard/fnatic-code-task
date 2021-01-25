import Container from '../components/container'
import MetaText from '../components/meta-text'

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full pt-3 pb-4" role="contentinfo">
      <Container>
        <div className="flex flex-wrap items-center">
          <img src="/wordmark.svg" alt="Fnatic Wordmark" className="w-24 inline-block" />
          
          <div className="ml-auto">
            <MetaText>By <a className="underline hover:text-orange focus:text-orange focus:outline-none" href="https://samgoddard.co.uk" target="_blank" rel="nonopener noreferrer">SG</a> — #ALWAYSFNATIC</MetaText>
          </div>
        </div>
      </Container>
    </footer>
  )
}