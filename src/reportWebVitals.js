const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getTTFB, getFCP, getLCP }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getTTFB(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      
    });
  }
};

export default reportWebVitals;
