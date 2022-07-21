import Image from 'next/image';
import { fotoMedidor, Registro } from '../services';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
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


export default function RegistroCard({ registro }: { registro: Registro }) {
  const dateObj = new Date(registro.data);
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newDate = `${day}/${month}/${year}`;
  const hora = dateObj.getHours();
  const minutos = dateObj.getMinutes();
  const newHora = `${hora}:${minutos}`;
  return (
    <Card className="registro">
      <p>📆 Data: {newDate}</p>
      <p>🕔 Horário: {newHora}</p>
      <p>🎇 Luz: {registro.luz} Wh/m²</p>
      <p>🌡 Temperatura: {registro.temperatura} °C</p>
      <p>☔ Umidade do ar: {registro.umidadeAr}%</p>
      <p>💧 Umidade do solo: {registro.umidadeSolo}%</p>
    </Card>
  )
}
