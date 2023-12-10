"use client";
import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      // setPickedImage(null);
      return;
    }
    const  fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p> No Image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The image selectd by the user" fill />
          )}
        </div>
        <input
          ref={imageInput}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png,image/jpeg"
          name={name}
          onChange={handleImageChange}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
