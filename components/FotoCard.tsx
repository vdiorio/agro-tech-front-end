import Image from 'next/image';
import { fotoMedidor, Foto } from '../services';
import styled from 'styled-components';

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


export default function FotoCard({ foto }: { foto: Foto }) {
  const dateObj = new Date(foto.data);
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newDate = `${day}/${month}/${year}`;
  const hora = dateObj.getHours();
  const minutos = dateObj.getMinutes();
  const newHora = `${hora}:${minutos}`;
  return (
    <Card className="foto" href={foto.downlaodPath}>
      <Image src={foto.downlaodPath} alt="medidor" width="200px" height="200px" />
      <h4>Data: {newDate}</h4>
      <h4>Horário: {newHora}</h4>
    </Card>
  )
}
