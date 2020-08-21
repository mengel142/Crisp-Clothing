import React, { useState, useEffect } from 'react';
import ImageGallery from './image-gallery/ImageGallery.jsx';
import productStylesData from '../../../../mockData/productStylesData';
import ProductInfo from './product-info/ProductInfo.jsx';
import productInfoData from '../../../../mockData/productInfoData';
import { useSelector } from 'react-redux';
import ProductDetails from './product-info/ProductDetails.jsx';

const Overview = () => {
  const productStyles = useSelector(state => state.productStyles);
  const [styleIndex, setStyleIndex] = useState(0);
  const [currentStyle, setCurrentStyle1] = useState();
  const [expandedView, resizeView] = useState(false);
  const toggleExpanded = () => resizeView(!expandedView);
  const toggleStyle = (value) => setStyleIndex(value);
  const productInfo = useSelector(state => state.productInfo);
  
  
  useEffect(() => {
    setCurrentStyle1(productStyles.length ? productStyles[styleIndex] : null);
  }, [productStyles, styleIndex]);



  return (
    <div className='overview-parent' >
      <div className='announcement'><em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em> -- SALE / DISCOUNT <b>OFFER</b> -- <u>NEW PRODUCT HIGHLIGHT</u></div>
      <ImageGallery toggleExpanded={toggleExpanded} expandedView={expandedView} currentStyle={currentStyle}/>
      <ProductInfo expandedView={expandedView} currentStyle={currentStyle} productStyles={productStyles} toggleStyle={toggleStyle} index={styleIndex} />
      <div className='product-description'>
      <h4>{productInfo.slogan}</h4>
        <p>{productInfo.description}</p>
      </div>
      <ProductDetails />
      
    </div>
  );
  
};

export default Overview;