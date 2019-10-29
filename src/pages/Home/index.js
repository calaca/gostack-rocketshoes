import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe1.jpg?ims=326x"
          alt="Tênis Adidas Falcon Feminino"
        />
        <strong>Tênis perfeito para performance</strong>
        <span>R$ 209,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe1.jpg?ims=326x"
          alt="Tênis Adidas Falcon Feminino"
        />
        <strong>Tênis perfeito para performance</strong>
        <span>R$ 209,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe1.jpg?ims=326x"
          alt="Tênis Adidas Falcon Feminino"
        />
        <strong>Tênis perfeito para performance</strong>
        <span>R$ 209,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe1.jpg?ims=326x"
          alt="Tênis Adidas Falcon Feminino"
        />
        <strong>Tênis perfeito para performance</strong>
        <span>R$ 209,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe1.jpg?ims=326x"
          alt="Tênis Adidas Falcon Feminino"
        />
        <strong>Tênis perfeito para performance</strong>
        <span>R$ 209,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
