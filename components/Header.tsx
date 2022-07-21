import PropTypes from 'prop-types';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../public/images/logo-wine.svg';
import search from '../public/images/search.svg';
import user from '../public/images/user.svg';
import cart from '../public/images/wine-cart.svg';

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid #e6e6e6;
  .wine-logo {
    width: 100px;
    height: 100%;
    margin-right: 20px;
    cursor: pointer;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;
    height: 100%;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 100;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
        color: #555555;
        vertical-align: middle;
      }
      li span {
        height: 100%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid transparent;
        border-color: #fff;
        &:hover {
          color: #D14B8F;
          border-color: #D14B8F;
          transition-property: color, border-color;
          transition-duration: 1.5s;
        }
      }
      span.current-page {
        color: #D14B8F;
        border-bottom: 2px solid #D14B8F;
      }
    }
    }
    div.right-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      stroke: red;
      fill: red;
      height: 100%;
      ul {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          font-size: 14px;
          font-weight: bold;
          padding: 0 10px;
          color: #000;
          cursor: pointer;
          &:hover {
            color: #D14B8F;
            }
        }
      }
      .cart-container {
        position: relative;
      }
    .cart-length {
      font-size: 14px;
      font-weight: bold;
      color: limegreen;
      position: absolute;
      bottom: 0px;
      right: 0px;
      background-color: #fff;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
    }`;

/**
 * Header component.
 * @return {JSX.Element}
 */
export default function Headers() {
  const { pathname } = useRouter();
  function isCurrentPage(page: string): string {
    return pathname.includes(page) ? 'current-page' : '';
  }
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <span className={!pathname.includes('fotos') ? 'current-page' : ''}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/fotos">
              <span className={isCurrentPage('fotos')}>Fotos</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

Headers.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ),
};

Headers.defaultProps = {
  cartItems: [],
};
