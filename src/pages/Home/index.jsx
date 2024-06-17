import { ButtonTrash, Container, StyledButtonForm, StyledCardDiv, StyledCardParagraph, StyledForm, StyledH1, StyledInputForm, StyledSpanForm } from "./Styled";
import Trash from '../../assets/trash.svg'

function Home() {
  const users = [
    {
      id: '234df4d5fg22d',
      name: 'Rodolfo',
      age: 33,
      email: 'rod@email.com'
    },
    {
      id: 'sf4s4f1sdf1',
      name: 'Aline',
      age: '28',
      email: 'aline@email.com'
    },
  ]

  return (
    <Container>
      <StyledForm>
        <StyledH1>Cadastro de Usuários</StyledH1>
        <StyledInputForm name="Nome" type="name" placeholder="Nome" />
        <StyledInputForm name="Idade" type="number" placeholder="Idade" />
        <StyledInputForm name="Email" type="email" placeholder="E-mail" />
        <StyledButtonForm type="button">Cadastrar</StyledButtonForm>
      </StyledForm>

      {users.map((user) => (
        <StyledCardDiv key={user.id}>
          <div>
            <StyledCardParagraph>Nome:<StyledSpanForm>{user.name}</StyledSpanForm> </StyledCardParagraph>
            <StyledCardParagraph>Idade:<StyledSpanForm>{user.age}</StyledSpanForm> </StyledCardParagraph>
            <StyledCardParagraph>Email:<StyledSpanForm>{user.email}</StyledSpanForm> </StyledCardParagraph>
          </div>
          <ButtonTrash>
            <img src={Trash} />
          </ButtonTrash>
        </StyledCardDiv>
      ))}
    </Container>
  )
}

export default Home;
