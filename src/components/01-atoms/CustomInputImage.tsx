import React, { useState } from 'react';
import upload from '@icons/upload.svg'
import Image from 'next/image'

export const CustomInputImage = () => {

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=''>
        <div className='flex justify-center blueTwoButton max-w-60 rounded-8 py-3'>
            <input
                className='hidden'
                type="file"
                accept="image/*"
                id='fileImage'
                onChange={handleImageChange}
            />
            <label htmlFor="fileImage" className='flex justify-center items-center font-medium text-center capitalize select-none cursor-pointer text-principal-200 w-full'>
                <Image
                    src={upload}
                    width={25}
                    height={25}
                    alt='Icono de imagen'
                    className='mr-3'
                />
                Agregar imagen
            </label>
        </div>
      {imageSrc && <img src={imageSrc} alt="Imagen subida" />}
    </div>
  );
};
