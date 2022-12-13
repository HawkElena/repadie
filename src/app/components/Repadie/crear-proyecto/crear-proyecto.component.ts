import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowDown, faSignIn, faSignOut,faDownload, faReceipt, faFilePen, faFileContract, faL, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ObjetoArreglo } from 'src/app/Models/RepadieMenuModel/ObjetoArrModel';
@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  public faUpload = faFilePen;
  public faEdit = faEdit;
  public faDelete  = faTrash;
  public esCrearPry:boolean= false;
  public esEditarPry:boolean=false;
  public busqueda_titulo:string="Buscar proyectos";
  // public esBusqueda:boolean=false;
  public arrFiltrosCmb:ObjetoArreglo[]=[];
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.esCrearPry= false;
    this.esEditarPry = false;
    this.llenaFiltrosCmb();
  }

  llamarHome()
  {
     this.router.navigate(['/home']);
  }

  public llamarCrearProyecto(){
    this.esCrearPry= true;
    this.esEditarPry = false;
  }
  public showForEdit(){
    this.esEditarPry=true;
  }
  public showForDelete(){

  }

  public llenaFiltrosCmb(){
    var tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "1";
    tmpObjFiltroCmb._valor="Codigo"
    tmpObjFiltroCmb._esSeleccionado=""
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrFiltrosCmb.push(tmpObjFiltroCmb);

    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "2";
    tmpObjFiltroCmb._valor="Nombre del Proyecto"
    tmpObjFiltroCmb._esSeleccionado=""
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrFiltrosCmb.push(tmpObjFiltroCmb);
    
    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "3";
    tmpObjFiltroCmb._valor="Fecha Inscripción"
    tmpObjFiltroCmb._esSeleccionado=""
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrFiltrosCmb.push(tmpObjFiltroCmb);
    
    tmpObjFiltroCmb = new ObjetoArreglo("","","","","");
    tmpObjFiltroCmb._indice= "3";
    tmpObjFiltroCmb._valor="Libro"
    tmpObjFiltroCmb._esSeleccionado=""
    tmpObjFiltroCmb._esInactivo=""
    tmpObjFiltroCmb._tipo="select"
    this.arrFiltrosCmb.push(tmpObjFiltroCmb);
    

  }
}
