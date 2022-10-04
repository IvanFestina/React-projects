import React from 'react';
import A from "./A";

const MainContainer = ({children}) => {
    return (
        
        <>
            <div className={'navbar'}>
                <A href={'/'} text={'Main'}/>
                <A href={'/users'} text={'Users'}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    padding: 15px;
                    background: #607b71;
                  }

                  .header {
                    padding: 15px
                  }
                `}
            </style>

        </>
    );
};

export default MainContainer;
