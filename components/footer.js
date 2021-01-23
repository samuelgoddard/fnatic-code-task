import Container from '../components/container'

export default function Footer() {
  return (
    <footer className="bg-black w-full pt-3 pb-4" role="contentinfo">
      <Container>
        <img src="/wordmark.svg" alt="Fnatic Wordmark" className="w-24 inline-block" />
      </Container>
    </footer>
  )
}