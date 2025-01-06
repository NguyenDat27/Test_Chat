import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@/ThemeProvider.jsx';

import imagePicker from '@/assets/images/imagepicker.png';
import uploadIcon from '@/assets/images/icons/upload.svg';

export default function ImagePicker() {

  const { theme } = useTheme();

  const images = [
    imagePicker,
    imagePicker,
    imagePicker,
    imagePicker,
  ];
  

  return (
    <ImagePickerContainer className="image-picker" theme={theme}>
      <ImageWrapper>
        <img className='upload_icon' src={uploadIcon} alt="Icon Upload" />
      </ImageWrapper>
      {images.map((src, index) => (
        <ImageWrapper key={src + index}>
          <CloseButton>&times;</CloseButton>
          <img src={src} alt={`Image Picker ${index}`} />
        </ImageWrapper>
      ))}
    </ImagePickerContainer>
  );
}

const ImagePickerContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 5px;
  justify-content: flex-end;
  max-width: 80%;
  background-color: ${(props) => props.theme === "dark" ? "#c7dfff" : "#f0f2f5"};
  img {
    width: 40px;
    height: 40px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  background-color: #e2e5e9;
  img {
    width: 40px;
    height: 40px;
  }
  .upload_icon {
    cursor: pointer;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fff;
  color: #878787;
  border: none;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  line-height: 23px;
  z-index: 10001;
`;