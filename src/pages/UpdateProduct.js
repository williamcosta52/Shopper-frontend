import { useState } from 'react';
import { InfosButtons, Products, Container } from './product.style';
import Papa from 'papaparse';
import axios from 'axios';

export default function UpdateProduct() {
  const [archiveCSV, setArchiveCSV] = useState([]);
  const [infosDiscount, setInfosDiscount] = useState([]);
  const [attPrice, setAttPrice] = useState(false);
  const [disabledbutton, setDisabledButton] = useState(false);
  const [isApply, setIsApply] = useState(false);
  const [buttonText, setButtonText] = useState('VALIDAR');
  const [error, setMessage] = useState(
    'O desconto não é aplicável pois quebra a regra dos 10%'
  );
  const handleFileChange = (event) => {
    setDisabledButton(false);
    setIsApply(false);
    const archive = event.target.files[0];
    if (archive) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const archiveCSV = e.target.result;
        Papa.parse(archiveCSV, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setArchiveCSV(result.data);
            for (let i = 0; i < result.data.length; i++) {
              if (!result.data[i].new_price || !result.data[i].product_code) {
                setMessage('Código do produto e novo preço são obrigatórios');
                setIsApply(true);
                setDisabledButton(true);
                return;
              }
            }
          },
        });
      };
      reader.readAsText(archive);
    }
  };
  async function checkDiscount(e) {
    e.preventDefault();
    setDisabledButton(true);
    setIsApply(false);
    const URL = process.env.REACT_APP_API;
    const body = {
      boolean: attPrice,
      product_code: archiveCSV[0].product_code,
      new_price: archiveCSV[0].new_price,
    };
    await axios
      .post(`${URL}/csv`, body)
      .then((r) => {
        setInfosDiscount(r.data);
        const currentPrice = r.data.currentPrice;
        const newPrice = r.data.newPrice;
        const biggestPrice = currentPrice * 1.1;
        const lowestPrice = currentPrice * 0.9;
        if (newPrice > biggestPrice || newPrice < lowestPrice) {
          setIsApply(true);
          setDisabledButton(true);
        } else {
          setIsApply(false);
          setDisabledButton(false);
          setButtonText('ATUALIZAR');
        }
      })
      .catch((e) => {
        setMessage(e.message);
      });
  }
  async function updatePrice(e) {
    e.preventDefault();
    setAttPrice(true);
    setDisabledButton(true);
    setIsApply(false);
    const URL = process.env.REACT_APP_API;
    const body = {
      boolean: attPrice,
      product_code: archiveCSV[0].product_code,
      new_price: archiveCSV[0].new_price,
    };
    await axios
      .post(`${URL}/csv`, body)
      .then((r) => {
        console.log(r);
        setDisabledButton(false);
        setIsApply(true);
        setMessage('Preço atualizado com sucesso!');
      })
      .catch((e) => {
        setMessage(e.message);
      });
  }
  return (
    <Container>
      <header>
        <h1>Shopper</h1>
      </header>
      <Products buttonText={buttonText}>
        <div>
          <h1 className='title'>Atualizar Preço</h1>
          <div>
            <h3>Nome: {infosDiscount && infosDiscount.name}</h3>
            <h3>Preço atual: {infosDiscount && infosDiscount.currentPrice}</h3>
            <h3>Novo preço: {infosDiscount && infosDiscount.newPrice}</h3>
            <h3>Código: {infosDiscount && infosDiscount.code}</h3>
          </div>
          {isApply && <p>{error}</p>}
          <InfosButtons disabledButton={disabledbutton}>
            <h2>O desconto é aplicável?</h2>
            <button
              onClick={buttonText === 'VALIDAR' ? checkDiscount : updatePrice}
              disabled={disabledbutton}
            >
              {buttonText}
            </button>
            <input
              type='file'
              accept='.csv'
              className='secondButton'
              onChange={handleFileChange}
            />
          </InfosButtons>
        </div>
      </Products>
    </Container>
  );
}
