import React from 'react';
import Image from 'next/image';

const PetsImage = () => {
  return (
    <div>
        {
            ['1', '2', '3', '4', '5'].map((item) => {
                return (
                    <div key={item}>
                        <Image src={`/${item}.jpg`} alt="image" width='500px' height='300px'/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PetsImage