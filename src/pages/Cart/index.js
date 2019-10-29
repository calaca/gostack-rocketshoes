import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="nothing" />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th aria-label="nothing" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe1.jpg?ims=326x"
                alt="Tênis Adidas Falcon Feminino"
              />
            </td>
            <td>
              <strong>Tênis perfeito para performance</strong>
              <span>R$ 209,99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,90</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$ 1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
