import { form, modal, modalSubmitBtn, modalTitle } from "./elems.js";
import { fillingForm } from "./formController.js";
import { hidePreview } from "./previewController.js";

const openModal = (id) => {
  if (id) {
    fillingForm(id);
  }
  modal.classList.add('d-block');
};

export const closeModal = () => {
  modal.classList.remove('d-block');
  form.reset();
  hidePreview();
};

export const modalController = ({ btn, delegation }) => {
  if (btn) {
    btn.addEventListener('click', () => {
      modalTitle.textContent = 'Добавить новый товар';
      modalSubmitBtn.textContent = 'Добавить товар';
      openModal();
    });
  }

  if (delegation) {
    delegation.parent.addEventListener('click', ({ target }) => {
      const rowGoods = target.closest(delegation.target);
      const targetExclude = target.closest(delegation.targetExclude);
      if (rowGoods && !targetExclude) {
        modalTitle.textContent = `Изменить товар #${rowGoods.dataset.id}`;
        modalSubmitBtn.textContent = 'Изменить товар';
        openModal(rowGoods.dataset.id);
      }
    });
  }

  modal.addEventListener('click', ({ target }) => {
    if (target === modal || target.classList.contains(classClose)) {
      closeModal();
    }
  });
};