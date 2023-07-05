import React, { useState } from 'react';
import Modal from 'react-modal';
import './Table.css';

const Image = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {console.log('this is new console', data.alt_description)}
      <img
        className="h-72 w-full object-cover rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
        onClick={openModal}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
     <table className="image-details-table">
  <tr>
    <th>Field</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>alt_description</td>
    <td>{data.alt_description}</td>
  </tr>
  <tr>
    <td>id</td>
    <td>{data.id}</td>
  </tr>
  <tr>
    <td>created_at</td>
    <td>{data.created_at}</td>
  </tr>
  <tr>
    <td>likes</td>
    <td>{data.likes}</td>
  </tr>
</table>

        <img
          className="h-72 w-full object-cover rounded-lg shadow-md"
          src={data.urls.small}
          alt={data.alt_description}
        />
         <button className="close-button" onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default Image;
