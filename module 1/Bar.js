import React from 'react';
import resData from './Data';

const Bar = () => {
//    const data=resData;
   console.log("sh",resData);
    return (
        <div>
           {resData.map((step) => {
                  return (
                    <>                 
                          {step.accordion}
                          {step.children.map((i)=>{
                            return(
                                <>
                                {i.name}
                                </>
                            )
                          })}
                    </>
                  );
                })}
        </div>
    );
};

export default Bar;