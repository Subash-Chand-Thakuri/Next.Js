import React from 'react'

type HeaderProps = {
    title: string;
};

 const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <header className='text-3xl font-bold'>
          <p style={
            {
              backgroundColor : "lightblue",
              paddingLeft     : "1rem"
            }
          }>{title}</p>
        </header>
    )
}

export default Header;