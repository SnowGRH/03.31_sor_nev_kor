export function rendezesSzoveg(list) {

    list.sort();
  }
export function rendezesSzam(list) {
    list.sort(function (a, b) {
      console.log(a,b)
      return b - a;
    });
  
  }
export function veletlenSzam(list) {
    list.sort(function (a, b) {
      return Math.random(0,1)*-2+1
    });
  
  }
  export function objRendezesKorSzerint(list) {
    list.sort(function (a, b) {
        return a.kor - b.kor;

      });
  }
  export function objRendezesNevSzerint(list) {
    list.sort(function (a, b) {
        let e=1;
        if (a.nev < b.nev) {
            e = -1
        }
        return e
      });
  }
 export function SzuresKorSzerint(list,felttel) {
    const SZURTLISTA = list.filter(function (obj) {
        return eval(obj.kor +felttel);
    })
    return SZURTLISTA
  }