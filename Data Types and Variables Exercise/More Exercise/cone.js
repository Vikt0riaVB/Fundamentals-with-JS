function cone(r, height){
        let volume = 0;
        let slant = 0;
        totalSurfaceArea = 0;
        pi = Math.PI;
     
     
        slant = Math.sqrt((r * r + height * height));
        volume = ((1/3 * pi) * (r * r)) * height;
        totalSurfaceArea = pi * r * (r + Math.sqrt(r * r + height * height));
     
        console.log(`volume = ${volume.toFixed(4)}`);
        console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
     

}