const simp = (ci = 0, tj = 0, ta = 0) => ci * tj * ta 
const comp = (ci = 0, tj = 0, ta = 0) => ci * Math.pow(1 + tj, ta)

console.log(simp(3,3,3))
console.log(comp(3,3,3))