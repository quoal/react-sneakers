function Drawer() {
  return (
    <div className="overlay" style={{ display: 'none' }}>
      <div className="drawer d-flex flex-column	">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="items flex">
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5 w-150">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5 w-150">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        {/* Меню с купленными товарами */}
        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
