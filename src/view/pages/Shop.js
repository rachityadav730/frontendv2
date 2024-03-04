import React, { useState, useEffect } from 'react';
import CardStyle from '../../component/common/CardStyle'
import CardGroup from 'react-bootstrap';

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/get_items');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Fetched data:", result);
        setItems(result.item_list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log("before return", items);

  return (
    <div className='product-dashboard'>
      {items.length > 0 ? ( 
            <CardStyle item_data= {items}/>
      ) : (
        <h1>Loading.....</h1>
      )}

    </div>
  );
};

export default Shop;
