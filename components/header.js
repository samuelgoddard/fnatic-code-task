import Container from '../components/container'

export default function Header() {
  return (
    <header className="w-full" role="banner">
      <Container>
        <div className="border-b border-black pt-3 pb-2">
          <img src="/logo.svg" alt="Fnatic Logo" className="w-10 inline-block" />
        </div>
      </Container>
    </header>
  )
}