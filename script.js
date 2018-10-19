// Script

const rand=(mn,mx) => {
  let verschil=mx-mn;
  let r=(Math.random()*verschil)+mn;
  return Math.round(r);
}


class vertex{
  constructor(px,py,mydemo){
    this.x=px;
    this.y=py;
    if (mydemo) mydemo.vertexes.push(this);
  }
}

class demo{
  constructor(hoeveel,w,h){
    this.vertexes=[]
    this.w=w;
    this.h=h;
    for (let i=0;i<hoeveel;i++) new vertex(rand(0,w),rand(0,h),this)
    this.settimer();
  }

  add(myvertex) { this.vertexes.push(myvertex); }

  settimer(){
    setTimeout(()=>{odemo.update()},100)
  }

  update(){
    let Scyndi=document.getElementById("Scyndi");
    //console.log("update");
    let start="<"+`svg width=${this.w} height=${this.h}`+">";
    let polygonstring=""
    try{
      for (let v of this.vertexes){
          v.x+=rand(1,3)-2;
          v.y+=rand(1,3)-2;
          polygonstring+=` ${v.x},${v.y}`;
      }
      let nv=this.vertexes[this.vertexes.length-1];
      if (rand(1,50)===1) new vertex(nv.x,nv.y);
      polygonstring=polygonstring.trim();
      let poly="<"+`polygon points="${polygonstring}"  style="stroke:rgb(255,180,0);stroke-width:5;"`+">";
      let einde="</sgg>";
      if (Scyndi) Scyndi.innerHTML=`${start}\n\t${poly}\n${einde}`;
      //console.log(Scyndi.innerHTML)
    } catch(e) {
      console.log(e);
    } finally {
      //console.log("Set timer!");
      this.settimer();
    }
  }
}


const odemo = new demo(3,1200,500);
