// Script

const rand(mn,mx) => {
  let verschil=mx-mn;
  let r=(Math.random()*verschil)+mn;
  return r;
}

class vertex(){
  constructor(px,py,mydemo){
    this.x=px;
    this.y=py;
    if (mydemo) mydemo.add(vertex);
  }
}

class demo{
  constructor(hoeveel,w,h){
    this.vertexes=[]
    for (let i=0;i<hoeveel;i++) new vertex(rand(0,w),rand(0,h),this)
  }

  add(myvertex) { this.vertexes.push(myvertex); }
}
