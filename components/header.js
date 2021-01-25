import Container from '../components/container'
import MetaText from '../components/meta-text'

export default function Header() {
  return (
    <header className="w-full">
      <Container>
        <div className="border-b border-black pt-3 pb-2 flex flex-wrap items-center">
          <img src="/logo.svg" alt="Fnatic Logo" className="w-10 inline-block" />
          
          <div className="ml-auto">
            <MetaText>Frontend Engineer Role Task</MetaText>
          </div>
        </div>
      </Container>
    </header>
  )
}