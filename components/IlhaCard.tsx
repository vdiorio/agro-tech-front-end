import Image from 'next/image';
import { fotoMedidor, Ilha, saveIlha } from '../services';
import styled from 'styled-components';
import { useState } from 'react';

const Card = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  background-color: #e9eaf0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`;

const NewCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 300px;
height: 400px;
background-color: #e9eaf0;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
margin-bottom: 20px;
padding: 20px;
transition: all 0.3s ease-in-out;
&:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
`;


export default function IlhaCard({ ilha, newCard }: { ilha: Ilha, newCard: boolean }) {
  const [regiao, setRegiao] = useState("");
  return !newCard ? (
    <Card className="ilha" href={`/ilha/${ilha.id}`}>
      <Image src={fotoMedidor} alt="medidor" width="200px" height="200px" />
      <h4>Ilha: {ilha.id}</h4>
      <h4>Região: {ilha.localizacao}</h4>
    </Card>
  ) : (
    <NewCard className="ilha">
      <h4>Cadastrar nova ilha</h4>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijuvXAjMd40L8wjlDDChVB7Tt5BWhs6Xt3z2SutSOgX7FMpa0njxGiTsiGcFxxnFyA-E&usqp=CAU" alt="add" width="200px" height="200px" />
      <h4>Região: 
        <input type="text" value={regiao} onChange={({target: { value }}) => setRegiao(value as unknown as string)} />
      </h4>
      <button onClick={() => saveIlha(regiao)}>Salvar</button>
    </NewCard>
  )
}
