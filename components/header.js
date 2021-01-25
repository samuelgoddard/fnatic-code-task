import Container from './container'
import MetaText from './meta-text'

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