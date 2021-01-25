import Container from '../components/container'

export default function Header() {
  return (
    <header className="w-full" role="banner">
      <Container>
        <div className="border-b border-black pt-3 pb-2 flex flex-wrap items-center">
          <img src="/logo.svg" alt="Fnatic Logo" className="w-10 inline-block" />
          <span className="ml-auto text-2xs uppercase tracking-wide">Frontend Engineer Role Task</span>
        </div>
      </Container>
    </header>
  )
}