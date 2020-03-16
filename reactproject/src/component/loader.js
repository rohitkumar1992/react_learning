import React from 'react';
import Loader from 'react-loader-spinner'
class CommonLoader extends React.Component{
    render() {
        return(
            <div className="loader_cont"> 
                <Loader
                    type="RevolvingDot"
                    color="#cd335e"
                    height={100}
                    width={100}
                >
                </Loader>
            </div>
        )
    }
}
export default CommonLoader;
