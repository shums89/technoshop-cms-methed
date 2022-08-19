import { tableGoods } from "./elems.js";
import { currencyFormatRUB } from "./utils.js";

const fillingRow = (rowGoods, { id, title, category, price }) => {
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
  return rowGoods;
};

export const renderRow = (data) => {
  const rowGoods = document.createElement('tr');
  rowGoods.classList.add('table-row', 'table-goods-item');
  rowGoods.dataset.id = data.id;

  tableGoods.append(fillingRow(rowGoods, data));

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

export const editRow = (data) => {
  const rowGoods = document.querySelector(`[data-id="${data.id}"]`);
  fillingRow(rowGoods, data);
};

export const tableRender = (goods) => {
  tableGoods.textContent = '';

  goods.forEach(renderRow);
};