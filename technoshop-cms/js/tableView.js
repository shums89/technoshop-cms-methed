import { tableGoods } from "./elems.js";
import { currencyFormatRUB } from "./utils.js";

export const renderRow = ({ id, title, category, price }) => {
  const rowGoods = document.createElement('tr');
  rowGoods.classList.add('table-row', 'table-goods-item');
  rowGoods.dataset.id = id;

  rowGoods.innerHTML = `
    <td>${id}</td>
    <td>${title}</td>
    <td>${category}</td>
    <td class="text-end">${currencyFormatRUB(price)}</td>
    <td class="d-flex">
      <button class="btn-table btn-delete">
        <svg width="30" height="30">
          <use xlink:href="#delete" />
        </svg>
      </button>
    </td>
  `;

  tableGoods.append(rowGoods);

  // tableGoods.insertAdjacentHTML('beforeend', `
  //   <tr class="table-row table-goods-item" data-id="${id}">
  //     <td>${id}</td>
  //     <td>${title}</td>
  //     <td>${category}</td>
  //     <td class="text-end">${currencyFormatRUB(price)}</td>
  //     <td class="d-flex">
  //       <button class="btn-table btn-delete">
  //         <svg width="30" height="30">
  //           <use xlink:href="#delete" />
  //         </svg>
  //       </button>
  //     </td>
  //   </tr>
  // `);
};

export const tableRender = (goods) => {
  tableGoods.textContent = '';

  goods.forEach(renderRow);
};