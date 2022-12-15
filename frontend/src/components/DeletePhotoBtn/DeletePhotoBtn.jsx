import React, { useState } from "react";

const DeletePhotoBtn = () => {
  async function deleteCard() {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/collections/${activeCollection}/cards/${displayCard.id}/`
    );
    if (response.status === 204) {
      await getCardsforCollection();
    }
  }
  return <div>Hmmm</div>;
};

export default DeletePhotoBtn;
