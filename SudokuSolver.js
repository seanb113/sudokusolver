function sudoku(a, x=0, y=0) {
    function next(x, y) {
        if (++y == 9) (x++, y=0);
        return x==9 ? a : sudoku(a,x,y);
    }
    function getFree(x, y) {
        let [xx, yy] = [~~(x / 3) * 3, ~~(y / 3) * 3];
        let nums = a[x].concat(a[0].map((_,i)=>a[i][y])).concat(a.slice(xx,xx+3).reduce((p,c)=>p.concat(c.slice(yy,yy+3)), []));
        return [1,2,3,4,5,6,7,8,9].filter(v=>!nums.includes(v));
    }
    a = a.slice().map(x=>x.slice());
    return a[x][y] ? next(x,y) : getFree(x,y).reduce((ans,n)=>(a[x][y]=n, ans||next(x,y)), 0);
}