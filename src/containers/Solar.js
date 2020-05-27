import React, {useEffect} from 'react';
import solarSystemArea from '../canvas/solarSystemArea';
import planet from '../canvas/planet';


const Solar = () => {
    
    let planetIns;
    let planetIns2;
    let solarArea = solarSystemArea(updateGameArea);
    
    useEffect(() => {
        planetIns = new planet(2, "red", 100, 200, solarArea);
        planetIns2 = new planet(0.2,"blue", 100, 200, solarArea);
        solarArea.start();  
    }, []);
  
    function updateGameArea() {
        solarArea.clear();
        planetIns.newPos();
        planetIns.update();
        planetIns2.newPos();
        planetIns2.update();
    }
     
    return (
        <div className="canvas"></div>   
    )  
}

export default Solar;