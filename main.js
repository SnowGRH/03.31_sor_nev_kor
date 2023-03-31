import { OBJLISTA } from "./adat.js";
import { SZOVEGLISTA } from "./adat.js";
import { SZAMLISTA } from "./adat.js";
import { rendezesSzoveg } from "./adatkezeles.js";
import { rendezesSzam } from "./adatkezeles.js";
import { veletlenSzam } from "./adatkezeles.js";
import { objRendezesKorSzerint } from "./adatkezeles.js";
import { objRendezesNevSzerint } from "./adatkezeles.js";
import { SzuresKorSzerint } from "./adatkezeles.js";

$(function () {
  console.log(OBJLISTA);
  let jsnoBJ = JSON.stringify(OBJLISTA);
  console.log(jsnoBJ);
  rendezesSzoveg(SZOVEGLISTA);
  rendezesSzam(SZAMLISTA);
  console.log(SZOVEGLISTA);
  console.log(SZAMLISTA);
  veletlenSzam(SZAMLISTA);
  console.log(SZAMLISTA);
 // objRendezesKorSzerint(OBJLISTA);
 // console.log(OBJLISTA);
  //objRendezesNevSzerint(OBJLISTA);
 // console.log(OBJLISTA);
  const SZURTLISTAKIIR = SzuresKorSzerint(OBJLISTA,"<=40")
  console.log(SZURTLISTAKIIR)
});
